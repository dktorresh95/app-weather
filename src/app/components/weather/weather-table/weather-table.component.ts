import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.component.html',
  styleUrls: ['./weather-table.component.css']
})
export class WeatherTableComponent {
  @Input() history: any[] = [];
  @Output() citySelected = new EventEmitter<any>();

  onSelectCity(city: any) {
    this.citySelected.emit(city);
  }
}
