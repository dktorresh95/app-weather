import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponent } from './weather.component';
import { TranslateCompiler, TranslateLoader, TranslateModule, TranslateParser, TranslateService, TranslateStore } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HistoryModule } from '../history/history.module';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherResultsComponent } from './weather-results/weather-results.component';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), HttpClientTestingModule, HistoryModule, ReactiveFormsModule ],
      declarations: [WeatherComponent, WeatherResultsComponent],
      providers: [TranslateService, TranslateStore, TranslateLoader, TranslateCompiler, TranslateParser]
    });
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init form', () => {
    expect(component.searchForm.get('city')?.value).toBe('');
  });

  it('should set input when selectCity is called', () => {
    component.selectCity('London');
    expect(component.searchForm.get('city')?.value).toBe('London');
  });
});
