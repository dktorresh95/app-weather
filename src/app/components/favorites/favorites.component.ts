import { Component } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  favorites: string[] = [];

  constructor(private favoritesService: FavoritesService, private router: Router) {
    this.loadFavorites();
  }

  loadFavorites() {
    this.favorites = this.favoritesService.getFavorites();
  }

  removeFavorite(city: string) {
    this.favoritesService.removeFavorite(city);
    this.loadFavorites();
  }

  back() {
    this.router.navigate(['/weather'])
  }
}
