import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceListPage, UtilityDetailPage } from '../pages';

@Component({
  selector: 'sub-services',
  templateUrl: 'sub-services.html'
})
export class SubServicesPage {
  subMenus: Array<{title: string, image : string ,component: any}>;
  title : string;
  constructor(private nav: NavController, private navParams: NavParams) {
      this.title = navParams.data;
      this.intitializeSubMenus();
  }

  openPage(page) {
      this.nav.push(page.component, page.title);
  }

  private intitializeSubMenus() {

    if(this.title === "UTILITY"){
        this.subMenus = [
                          { title: 'NUMBER', component: UtilityDetailPage, image : 'assets/images/red_cross.png' },
                          { title: 'PHARMACY', component: UtilityDetailPage, image : 'assets/images/pharmacies.png' },
                          { title: 'TRANSPORT', component: UtilityDetailPage, image : 'assets/images/transports.png' },
                          { title: 'GARBAGE', component: UtilityDetailPage, image : 'assets/images/garbage.png' },
                          { title: 'BANCOMAT', component: UtilityDetailPage, image : 'assets/images/bancomat.png' }
                      ];
    }else if(this.title === "FOOD_DRINK") {
       this.subMenus = [
                          { title: 'RESTAURANT', component: ServiceListPage, image : 'assets/images/food_drinks.png' },
                          { title: 'PIZZA', component: ServiceListPage, image : 'assets/images/pizza.png' },
                          { title: 'EASY_FOOD', component: ServiceListPage, image : 'assets/images/easy_food.png' }
                      ];
    }

  }

}
