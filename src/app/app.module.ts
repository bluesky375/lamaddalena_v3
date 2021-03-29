import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import {
  DashboardPage, HistoryPage, MeteoPage, IntroductionPage, SettingsPage,
  EventListPage, EventDetailPage,
  BeachesPage, BeachDetailPage,
  PlacesPage, PlaceDetailPage,
  ServicesPage, ServiceDetailPage, SubServicesPage, UtilityDetailPage, ServiceListPage,
  OtherPage, OffersPage
} from '../pages/pages';
import { PipesModule } from '../pipes/pipes.module';
import { MeteoModalPageModule } from '../pages/meteo-modal/meteo-modal.module';
import { MapModalPageModule } from '../pages/map-modal/map-modal.module';
import { IonicImageLoader } from 'ionic-image-loader';
import { OrderModule } from 'ngx-order-pipe';
import { Geolocation } from '@ionic-native/geolocation';
import { AppState } from './app.global';
import { IonicStorageModule } from '@ionic/storage'
import { Network } from '@ionic-native/network';
import { AppRate } from '@ionic-native/app-rate';

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    DashboardPage,
    EventListPage,
    EventDetailPage,
    HistoryPage,
    IntroductionPage,
    // Beaches
    BeachesPage, BeachDetailPage,
    // Places
    PlacesPage, PlaceDetailPage,
    // Services
    ServicesPage, ServiceDetailPage, SubServicesPage, UtilityDetailPage, ServiceListPage,
    OtherPage, OffersPage,
    MeteoPage
  ],
  imports: [
    PipesModule,
    BrowserModule,
    HttpModule,
    MeteoModalPageModule,
    MapModalPageModule,
    IonicImageLoader.forRoot(),
    OrderModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    DashboardPage,
    EventListPage,
    EventDetailPage,
    HistoryPage,
    IntroductionPage,
    // Beaches
    BeachesPage, BeachDetailPage,
    // Places
    PlacesPage, PlaceDetailPage,
    // Services
    ServicesPage, ServiceDetailPage, SubServicesPage, UtilityDetailPage, ServiceListPage,
    OtherPage, OffersPage,
    MeteoPage
  ],
  providers: [
    Network,
    AppRate,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Geolocation,
    AppState
  ]

})
export class AppModule { }

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}