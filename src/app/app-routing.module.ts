import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'weather',
    loadChildren: () =>
      import('./components/weather/weather.module').then((m) => m.WeatherModule),
  },
  {
    path: 'favorites',
    loadChildren: () =>
      import('./components/favorites/favorites.module').then((m) => m.FavoritesModule),
  },
  {
    path: '**',
    redirectTo: 'weather',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
