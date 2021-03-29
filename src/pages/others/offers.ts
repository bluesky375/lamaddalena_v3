import { Component } from '@angular/core';
import { MenuController, Nav } from 'ionic-angular';
import { AppState } from '../../app/app.global';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'offers',
  templateUrl: 'offers.html'
})
export class OffersPage {

  currentTheme: String;
  currentLang: String;
  constructor(public global: AppState, public menu: MenuController) {
  	this.currentTheme = global.get('theme');
  	this.currentLang = global.get('lang')

  }

  callMenu() {

  	this.menu.open();

  }
}