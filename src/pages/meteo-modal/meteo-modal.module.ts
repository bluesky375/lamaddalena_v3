import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeteoModalPage } from './meteo-modal';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

@NgModule({
  declarations: [
    MeteoModalPage,
  ],
  imports: [
  	TranslateModule,
    IonicPageModule.forChild(MeteoModalPage)
  ],
})
export class MeteoModalPageModule {}
