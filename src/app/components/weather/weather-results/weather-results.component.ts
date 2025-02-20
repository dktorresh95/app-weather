import { Component, Input } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-weather-results',
  templateUrl: './weather-results.component.html',
  styleUrls: ['./weather-results.component.css']
})
export class WeatherResultsComponent {

  @Input() city: string = '';
  @Input() data: any;
  @Input() errorMessage: string = '';
  isFavorite: boolean = false;

  constructor(private favoritesService: FavoritesService) {

  }
  addFavorite() {
    this.favoritesService.addFavorite(this.city);
    this.isFavorite = true;
  }
}
