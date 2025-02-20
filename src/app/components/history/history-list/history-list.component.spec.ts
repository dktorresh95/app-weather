import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryListComponent } from './history-list.component';
import { TranslateCompiler, TranslateLoader, TranslateModule, TranslateParser, TranslateService, TranslateStore } from '@ngx-translate/core';

describe('HistoryListComponent', () => {
  let component: HistoryListComponent;
  let fixture: ComponentFixture<HistoryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [HistoryListComponent],
      providers: [TranslateService, TranslateStore, TranslateLoader, TranslateCompiler, TranslateParser]
      
    });
    fixture = TestBed.createComponent(HistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
