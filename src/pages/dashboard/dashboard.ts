import { Component } from '@angular/core';
import { MenuController, Nav } from 'ionic-angular';
import { AppState } from '../../app/app.global';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  currentTheme: String;
  constructor(public global: AppState, public menu: MenuController) {
  	this.currentTheme = global.get('theme');

  }

  callMenu() {

  	this.menu.open();

  }
}
