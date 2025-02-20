import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTableComponent } from './weather-table.component';
import { TranslateCompiler, TranslateLoader, TranslateModule, TranslateParser, TranslateService, TranslateStore } from '@ngx-translate/core';

describe('WeatherTableComponent', () => {
  let component: WeatherTableComponent;
  let fixture: ComponentFixture<WeatherTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [WeatherTableComponent],
      providers: [TranslateService, TranslateStore, TranslateLoader, TranslateCompiler, TranslateParser]
    });
    fixture = TestBed.createComponent(WeatherTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
