import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-weather';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');  
    this.translate.use('es');  
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
