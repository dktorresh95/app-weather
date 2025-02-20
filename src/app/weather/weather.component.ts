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
  errorMessage: any = '';
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
      const city = this.searchForm.value.city;
      this.weatherService.getWeather(city || '').subscribe({
        next: (data) => {
          this.weatherSelected = data;
        },
        error: () => {
          this.weatherSelected = null;
          this.errorMessage = "No se encontró la ciudad seleccionada"
        },
      });
    }
  }
}
