import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { LoadingController, NavController } from 'ionic-angular';
import { FindInApi } from  '../../shared/shared';

@Component({
  selector: 'place-detail',
  templateUrl: 'detail.html'
})
export class PlaceDetailPage {
  list: any;
  title : string;
  constructor(private findInApi : FindInApi, 
              private nav : NavController, 
              private navParams : NavParams, 
              private loader : LoadingController) 
  {
    this.title = navParams.data;
  }

  ionViewDidLoad() {
   let loader = this.loader.create({
      content: 'Loading ...'
    });

    loader.present().then(() => {
      this.findInApi.getPlaces(this.navParams.data).subscribe(data => {
        this.list = data;
        loader.dismiss();
      });
    });
  }

}