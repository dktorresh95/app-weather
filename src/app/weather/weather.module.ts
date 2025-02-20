import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { WeatherResultsComponent } from './weather-results/weather-results.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HistoryModule } from '../history/history.module';
import { WeatherTableComponent } from './weather-table/weather-table.component';


@NgModule({
  declarations: [
    WeatherComponent,
    WeatherResultsComponent,
    WeatherTableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WeatherRoutingModule,
    HistoryModule
  ]
})
export class WeatherModule { }
