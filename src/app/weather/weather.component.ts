import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, Observable, switchMap } from 'rxjs';
import { WeatherApiService } from '../services/weather-api.service';
import { WeatherResponse } from '../models/response.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent{
  weatherSelected: any = null;
  errorMessage: string = '';
  city: string = '';
  searchForm = new FormGroup({
    city: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });
  suggestions$: Observable<any>;
  history: any[] = [];
  viewTable: boolean = false;
  constructor(private weatherService: WeatherApiService, private router: Router) {
    this.suggestions$ = this.searchForm.get('city')!.valueChanges.pipe(
      debounceTime(300),
      switchMap((value) => this.weatherService.getCitySuggestions(value || ''))
    );
  }


  onSubmit() {
    if (this.searchForm.valid) {
      this.city = this.searchForm.value.city || '';
      this.weatherService.getWeather(this.city || '').subscribe({
        next: (data: WeatherResponse) => {
          this.viewTable = false;
          this.weatherSelected = data;
          this.saveHistory(this.city, this.weatherSelected);
        },
        error: () => {
          this.weatherSelected = null;
          this.errorMessage = "No se encontró la ciudad seleccionada"
        },
      });
    }
  }

  saveHistory(city: string, weatherSelected: WeatherResponse) {
    let history = JSON.parse(localStorage.getItem("weatherCities") || '[]');
    const exists = history.some((entry: any) => entry.city === city);
    if (!exists) {
      history.unshift(weatherSelected);
      if (history.length > 10) history.pop(); // Limitar a 10 registros
      localStorage.setItem('weatherCities', JSON.stringify(history));
    }
  }

  selectCity(city: string) {
    this.searchForm.get("city")?.setValue(city);
    this.onSubmit();
  }

  navigateFavorites() {
    this.router.navigate(['/favorites'])
  }

  loadHistory() {
    const storedHistory = localStorage.getItem('weatherCities');
    this.history = storedHistory ? JSON.parse(storedHistory) : [];
    console.log(this.history)
  }

  changeView() {
    this.viewTable = true;
    this.loadHistory();
  }
}
