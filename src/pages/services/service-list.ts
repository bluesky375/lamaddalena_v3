import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { LoadingController, NavController } from 'ionic-angular';
import { FindInApi } from  '../../shared/shared';
import { ServiceDetailPage } from '../pages';


@Component({
  selector: 'service-list',
  templateUrl: 'service-list.html'
})
export class ServiceListPage {
  title : string;
  sponsors: any;
  constructor(private findInApi : FindInApi, 
              private nav : NavController, 
              private navParams : NavParams, 
              private loader : LoadingController) 
  {
    this.title = navParams.data;
  }

  openPage(data) {
      this.nav.push(ServiceDetailPage, data);
  }

  ionViewDidLoad() {
   let loader = this.loader.create({
      content: 'Loading ...'
    });

    loader.present().then(() => {
      this.findInApi.getSponsors(this.navParams.data).subscribe(data => {
        this.sponsors = data;
        loader.dismiss();
      });
    });
  }
}