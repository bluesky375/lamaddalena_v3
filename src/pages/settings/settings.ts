import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppState } from '../../app/app.global';
import {Storage} from "@ionic/storage";

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  currentLanguage : String;
  currentTheme: String;
  constructor(private translateService: TranslateService, public global: AppState, private storage: Storage) {
      this.currentLanguage = translateService.currentLang || 'it';
      this.currentTheme = global.get('theme');
  }

  // Translate to italian language
  translateToItalian(){
    this.translateService.use('it');
    this.storage.set('lang', 'it');
    this.global.set('lang','it')
  }

  // Translate to english language
  translateToEnglish(){
    this.translateService.use('en');
    this.storage.set('lang', 'en');
    this.global.set('lang','en')
  }

  changeTheme(theme)  {
     this.global.set('theme', theme);
     this.storage.set('theme', theme);
    console.log("Tema:"+theme);
  }

}
