import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private storageKey = 'favorites';

  constructor() { }

  getFavorites(): string[] {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  addFavorite(city: string): void {
    let favorites = this.getFavorites();
    if (!favorites.includes(city)) {
      favorites.push(city);
      localStorage.setItem(this.storageKey, JSON.stringify(favorites));
    }
  }

  removeFavorite(city: string): void {
    let favorites = this.getFavorites().filter(fav => fav !== city);
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }

  isFavorite(city: string): boolean {
    return this.getFavorites().includes(city);
  }

}
