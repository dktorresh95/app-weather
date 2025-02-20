import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { WeatherResultsComponent } from './weather-results/weather-results.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HistoryModule } from '../history/history.module';
import { WeatherTableComponent } from './weather-table/weather-table.component';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';


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
    HistoryModule,
    TranslateModule
  ]
})
export class WeatherModule { }
