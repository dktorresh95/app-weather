import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { WeatherResultsComponent } from './weather-results/weather-results.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HistoryModule } from '../history/history.module';


@NgModule({
  declarations: [
    WeatherComponent,
    WeatherResultsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WeatherRoutingModule,
    HistoryModule
  ]
})
export class WeatherModule { }
