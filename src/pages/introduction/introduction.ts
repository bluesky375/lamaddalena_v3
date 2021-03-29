import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { FindInApi } from  '../../shared/shared';


@Component({
  selector: 'introduction',
  templateUrl: 'introduction.html'
})
export class IntroductionPage {
   introductions: any;
   constructor(private findInApi : FindInApi, 
              private nav : NavController, 
              private loader : LoadingController) {

  }

  ionViewDidLoad() {
   let loader = this.loader.create({
      content: 'Loading ...'
    });

    loader.present().then(() => {
      this.findInApi.getIntroductions().subscribe( data => {
        this.introductions = data;
        loader.dismiss();
      });
    });
  }
}
