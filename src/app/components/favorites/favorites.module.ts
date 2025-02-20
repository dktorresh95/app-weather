import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    FavoritesComponent,
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    TranslateModule
  ]
})
export class FavoritesModule { }
