import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlaceDetailPage } from '../pages';

@Component({
  selector: 'places',
  templateUrl: 'places.html'
})
export class PlacesPage {
  subMenus: Array<{title: string, image : string ,component: any}>;
  constructor(private nav: NavController) {
     this.subMenus = [
                        { title: 'MUSEUMS', component: PlaceDetailPage, image : 'assets/images/museums.png' },
                        { title: 'FOOT_PATHS', component: PlaceDetailPage, image : 'assets/images/foot_paths.png' },
                        { title: 'HIGHLIGHTS', component: PlaceDetailPage, image : 'assets/images/highlights.png' },
                        { title: 'FORTIFICATIONS', component: PlaceDetailPage, image : 'assets/images/historical_places.png' }
                    ];

  }

  openPage(page) {
      this.nav.push(page.component, page.title);
  }

}
