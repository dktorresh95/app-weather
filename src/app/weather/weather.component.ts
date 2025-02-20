import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, Observable, switchMap } from 'rxjs';
import { WeatherApiService } from '../services/weather-api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  weatherSelected: any = null;
  errorMessage: string = '';
  city: string = '';
  searchForm = new FormGroup({
    city: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });
  suggestions$: Observable<any>;

  constructor(private weatherService: WeatherApiService) {
    this.suggestions$ = this.searchForm.get('city')!.valueChanges.pipe(
      debounceTime(300),
      switchMap((value) => this.weatherService.getCitySuggestions(value || ''))
    );
  }

  onSubmit() {
    if (this.searchForm.valid) {
      this.city = this.searchForm.value.city || '';
      this.weatherService.getWeather(this.city || '').subscribe({
        next: (data) => {
          this.weatherSelected = data;
          this.saveHistory(this.city);
        },
        error: () => {
          this.weatherSelected = null;
          this.errorMessage = "No se encontró la ciudad seleccionada"
        },
      });
    }
  }

  saveHistory(city: any) {
    let history = JSON.parse(localStorage.getItem("weatherCities") || '[]');
    if (!history.includes(city)) {
      history.unshift(city);
      if (history.length > 10) history.pop();
      localStorage.setItem('weatherCities', JSON.stringify(history));
    }
  }

  selectCity(city: string) {
    this.searchForm.get("city")?.setValue(city);
    this.onSubmit();
  }
}
