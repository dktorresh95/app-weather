import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent {
  history: string[] = [];
  @Output() citySelected = new EventEmitter<string>();

  constructor() {
    this.loadHistory();
  }

  private loadHistory() {
    const storedHistory = localStorage.getItem('weatherCities');
    this.history = storedHistory ? JSON.parse(storedHistory) : [];
  }

  onSelectCity(city: string) {
    this.citySelected.emit(city);
  }

  clearHistory() {
    localStorage.removeItem('weatherCities');
    this.history = [];
  }
}
