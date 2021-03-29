import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceListPage, SubServicesPage } from '../pages';

@Component({
  selector: 'services',
  templateUrl: 'services.html'
})
export class ServicesPage {
  subMenus: Array<{title: string, image : string ,component: any}>;
  constructor(private nav: NavController) {
    this.subMenus = [                        
                        { title: 'FOOD_DRINK', component: SubServicesPage, image : 'assets/images/easy_food.png' },
                        { title: 'SLEEP', component: ServiceListPage, image : 'assets/images/sleep.png' },
                        { title: 'SHOP', component: ServiceListPage, image : 'assets/images/shops.png' },
                        //{ title: 'STREET_MARKET', component: ServiceListPage, image : 'assets/images/mercati.png' },
                        { title: 'BOATING', component: ServiceListPage, image : 'assets/images/boating.png' },
                        { title: 'RENTAL', component: ServiceListPage, image : 'assets/images/rentals.png' },
                        { title: 'SPORT_TRIP', component: ServiceListPage, image : 'assets/images/sport_trips.png' },
                        { title: 'PROFESSIONAL', component: ServiceListPage, image : 'assets/images/professionals.png' }
                      ];

  }

  openPage(page) {
      this.nav.push(page.component, page.title);
  }

}
