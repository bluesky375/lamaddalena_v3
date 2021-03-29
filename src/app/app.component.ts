import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { AppState } from './app.global';
import { AppRate } from '@ionic-native/app-rate';

import {
  DashboardPage, EventListPage, HistoryPage, MeteoPage, IntroductionPage, SettingsPage,
  BeachesPage,
  PlacesPage,
  ServicesPage,
  SubServicesPage,
  OtherPage, OffersPage
} from '../pages/pages';
import { FindInApi, NetworkService } from '../shared/shared';

@Component({
  templateUrl: 'app.html',
  providers: [
    FindInApi,
    NetworkService,
    StatusBar,
    SplashScreen
  ],
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make DashboardPage the root (or first) page
  rootPage: any = DashboardPage;
  appMenus: Array<{ title: string, image: string, component: any }>;
  navigationMenus: Array<{ title: string, image: string, component: any }>;
  serviceMenus: Array<{ title: string, image: string, component: any }>;
  subMenus: Array<{ title: string, image: string, component: any }>;

  _mainMenuName: string = 'mainMenu';
  alert: any;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private findInApi: FindInApi,
    public menu: MenuController,
    private translate: TranslateService,
    public global: AppState,
    private storage: Storage,
    private alertCtrl: AlertController,
    private appRate: AppRate
  ) {

    translate.setDefaultLang('it');


    this.initializeApp();
    this.storage.get('theme').then((val) => {
      console.log('Tema:' + val);
      if (val) { this.global.set('theme', val) }
      else {
        this.global.set('theme', 'theme-dark');
      }
    });
    this.storage.get('lang').then((lang) => {
      this.global.set('lang', lang);
      console.log('Lingua :' + lang);
      if (lang) { translate.setDefaultLang(lang); }
      else {
        if (navigator.language.substring(0, 2) == 'it') {
          console.log(navigator.language.substring(0, 2))
          this.global.set('lang', 'it');
          this.storage.set('lang', 'it')
        }
        else {
          this.global.set('lang', 'en')
          this.storage.set('lang', 'en')
        }

      }
    });

    this.storage.get('privacy_read').then((privacy_read) => {
      this.global.set('privacy_read', privacy_read);
      console.log('Privacy? :' + privacy_read);
      if (privacy_read == true) { }
      else {
        if (this.alert) {
          this.alert.dismiss();
          this.alert = null;
        }
        else {
          if (this.global.get('lang') == 'en') {
            var title_alert = 'We take care of your personal data';
            var message_alert = 'Please read the notice according to the GDPR 2016/679, in which we describe the attention, the lawfulness and the purposes of the processing of your personal data.';
            var btnCancel_alert = 'Continue';
            var btnOk_alert = 'Read Notice'
          } else {
            var title_alert = 'Abbiamo cura dei tuoi dati personali';
            var message_alert = 'Ti preghiamo di leggere l\'informativa ai sensi del GDPR 2016/679, nella quale ti descriviamo l\'attenzione, la liceità e le finalità del trattamento dei tuoi dati personali.';
            var btnCancel_alert = 'Prosegui';
            var btnOk_alert = 'Leggi Informativa'
          }
          this.alert = this.alertCtrl.create({
            title: title_alert,
            message: message_alert,
            buttons: [

              {
                text: btnOk_alert,
                handler: () => {

                  this.nav.setRoot(OtherPage);
                }
              },
              {
                text: btnCancel_alert,
                role: 'cancel',
                handler: () => {
                  this.alert = null;
                }
              }
            ]
          });
          this.alert.present();
        }
        this.global.set('privacy_read', true);
        this.storage.set('privacy_read', true)
      }
    });




    // Menus which have sub menu items
    this.navigationMenus = [
      { title: 'SERVICES', component: ServicesPage, image: 'assets/images/services.png' },
      { title: 'UTILITY', component: SubServicesPage, image: 'assets/images/help_info.png' },
      { title: 'BEACHES', component: BeachesPage, image: 'assets/images/beaches.png' },
      { title: 'PLACES', component: PlacesPage, image: 'assets/images/places.png' }
    ];

    // set our app menu pages
    this.appMenus = [
      { title: 'METEO', component: MeteoPage, image: 'assets/images/meteo.png' },
      { title: 'EVENTS', component: EventListPage, image: 'assets/images/events.png' },
      { title: 'INTRODUCTION', component: IntroductionPage, image: 'assets/images/introduction.png' },
      { title: 'HISTORY', component: HistoryPage, image: 'assets/images/history.png' },
      { title: 'Yesconticino', component: OffersPage, image: 'assets/images/yesconticino.png' }
    ];

    // set our service menu pages
    this.serviceMenus = [
      { title: 'SETTINGS', component: SettingsPage, image: 'assets/images/settings.svg' },
      { title: 'CONTACT_US', component: DashboardPage, image: 'assets/images/contact.svg' },
      { title: 'RATE_APP', component: DashboardPage, image: 'assets/images/rateapp.svg' },
      { title: 'PRIVACY', component: OtherPage, image: 'assets/images/privacy.svg' }
    ];

  }

  initializeApp() {

    this.menu.enable(true, this._mainMenuName);
    this.platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.statusBar.styleDefault();


      // Stop splash screen when all data is loaded 
      this.findInApi.loadAllData().subscribe(data => {
        this.splashScreen.hide();
        console.log('NASCONDO SPLASH');
      });

      // Set Back Button Functionality for app
      this._setBackButtonFunctionality();


    });
  }

  goHome() {
    this.menu.close();
    this.nav.setRoot(DashboardPage);

  }

  openPage(page) {

    switch (page.title) {
      case "CONTACT_US":
        window.location.href = "mailto: supporto@appturistiche.it?subject=Richiesta%20da%20La%20Maddalena%20Arcipelago";
        break;
      case "RATE_APP":
        if (this.global.get('lang') == 'it') {
          this.appRate.preferences.useLanguage = 'it';
        }
        this.appRate.preferences.displayAppName = 'La Maddalena Arcipelago';
        this.appRate.preferences.storeAppURL = {

          ios: '1002093403',
          android: 'market://details?id=it.findin.lamaddalena'
          //windows: 'ms-windows-store://review/?ProductId=< Store_ID >'
        };

        this.appRate.promptForRating(true);
        break;

      default:
        this.menu.close();
        if (page.title === "UTILITY") {
          this.nav.push(page.component, page.title);
        }
        else {
          this.nav.setRoot(page.component);
        }
        break;
    }
  }

  private _setBackButtonFunctionality() {
    this.platform.registerBackButtonAction(() => {
      console.log(this.nav);
      if (this.nav.canGoBack()) {
        this.nav.pop();
      }
      else {
        /*
        if(this.alert){ 
          this.alert.dismiss();
          this.alert =null;     
        }
        else {
           
           this.alert = this.alertCtrl.create({
                                                  title: 'Uscita?',
                                                  message: 'Vuoi uscire da Findin?',
                                                  buttons: [
                                                    {
                                                      text: 'Annulla',
                                                      role: 'cancel',
                                                      handler: () => {
                                                        this.alert =null;
                                                      }
                                                    },
                                                    {
                                                      text: 'Esci',
                                                      handler: () => {
                                                        this.platform.exitApp();
                                                      }
                                                    }
                                                  ]
                                                });
            this.alert.present();
        }
    */
      }
    });
  }


}