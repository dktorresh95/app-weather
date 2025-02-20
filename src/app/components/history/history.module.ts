import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryListComponent } from './history-list/history-list.component';


@NgModule({
  declarations: [
    HistoryListComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule
  ],
  exports: [
    HistoryListComponent
  ]
})
export class HistoryModule { }
