import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'weather',
    loadChildren: () =>
      import('./components/weather/weather.module').then((m) => m.WeatherModule),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./components/history/history.module').then((m) => m.HistoryModule),
  },
  {
    path: 'favorites',
    loadChildren: () =>
      import('./components/favorites/favorites.module').then((m) => m.FavoritesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
