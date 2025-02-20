import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryListComponent } from './history-list/history-list.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HistoryListComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    TranslateModule
  ],
  exports: [
    HistoryListComponent
  ]
})
export class HistoryModule { }
