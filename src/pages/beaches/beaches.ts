import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BeachDetailPage } from '../pages';

@Component({
  selector: 'beaches',
  templateUrl: 'beaches.html'
})
export class BeachesPage {
  subMenus: Array<{title: string, image : string ,component: any}>;
  constructor(private nav: NavController) {
     this.subMenus = [
                        { title: 'LA_MADDALENA', component: BeachDetailPage, image : 'assets/images/la_maddalena.png' },
                        { title: 'CAPRERA', component: BeachDetailPage, image : 'assets/images/caprera.png' },
                        { title: 'PORTO_MADONNA', component: BeachDetailPage, image : 'assets/images/porto_madonna.png' },
                        { title: 'SPARGI', component: BeachDetailPage, image : 'assets/images/spargi.png' },
                      ];
  }

  openPage(page) {
      this.nav.push(page.component, page.title);
  }

}

