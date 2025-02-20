import { Injectable } from '@angular/core';
import { catchError, Observable, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private apiUrl = 'https://api.weatherapi.com/v1';
  private apiKey = '404f9302dbc5465d865232226251902';
  private cache = new Map<string, Observable<any>>();

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    if (this.cache.has(city)) {
      return this.cache.get(city)!;
    }
    const request = this.http.get(`${this.apiUrl}/current.json?key=${this.apiKey}&q=${city}`)
      .pipe(
        shareReplay(1),
        catchError(err => {
          console.error('Error', err);
          throw err;
        })
      );

    this.cache.set(city, request);
    return request;
  }

  getCitySuggestions(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search.json?key=${this.apiKey}&q=${query}`)
      .pipe(
        catchError(err => {
          console.error('Error', err);
          throw err;
        })
      );
  }
}
