import { Component } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  favorites: string[] = [];

  constructor(private favoritesService: FavoritesService) {
    this.loadFavorites();
  }

  loadFavorites() {
    this.favorites = this.favoritesService.getFavorites();
  }

  removeFavorite(city: string) {
    this.favoritesService.removeFavorite(city);
    this.loadFavorites();
  }
}
