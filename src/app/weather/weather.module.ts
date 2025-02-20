import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherResultsComponent } from './weather-results/weather-results.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WeatherComponent,
    WeatherSearchComponent,
    WeatherResultsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
