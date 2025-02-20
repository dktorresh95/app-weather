import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { WeatherApiService } from './weather-api.service';

describe('WeatherApiService', () => {
  let service: WeatherApiService;
  let httpMock: HttpTestingController;
  const apiUrl = 'https://api.weatherapi.com/v1';
  const apiKey = '404f9302dbc5465d865232226251902';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherApiService],
    });
    service = TestBed.inject(WeatherApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch weather data', () => {
    const mockWeather = {
      location: { name: 'Bogota' },
      current: { temp_c: 20 },
    };

    service.getWeather('Bogota').subscribe((data) => {
      expect(data).toEqual(mockWeather);
    });

    const req = httpMock.expectOne(
      `${apiUrl}/current.json?key=${apiKey}&q=Bogota`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockWeather);
  });

  it('should fetch city suggestions', () => {
    const mockSuggestions = [{ name: 'Bogota' }, { name: 'London' }];

    service.getCitySuggestions('Bog').subscribe((data) => {
      expect(data).toEqual(mockSuggestions);
    });

    const req = httpMock.expectOne(`${apiUrl}/search.json?key=${apiKey}&q=Bog`);
    expect(req.request.method).toBe('GET');
    req.flush(mockSuggestions);
  });

  it('should cache weather requests', () => {
    const mockWeather = {
      location: { name: 'Bogota' },
      current: { temp_c: 20 },
    };

    service.getWeather('Bogota').subscribe();
    service.getWeather('Bogota').subscribe();

    const req = httpMock.expectOne(
      `${apiUrl}/current.json?key=${apiKey}&q=Bogota`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockWeather);

    httpMock.verify();
  });
});
