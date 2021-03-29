import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';

import { FindInApi } from  '../../shared/shared';

@Component({
  selector: 'history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  histories: any;
  constructor(private findInApi : FindInApi, 
              private nav : NavController, 
              private loader : LoadingController) {

  }

  ionViewDidLoad() {
   let loader = this.loader.create({
      content: 'Loading ...'
    });

    loader.present().then(() => {
      this.findInApi.getHistories().subscribe( data => {
        this.histories = data;
        loader.dismiss();
      });
    });
  }

}
