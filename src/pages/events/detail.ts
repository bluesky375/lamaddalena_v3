import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { LoadingController, NavController } from 'ionic-angular';
import { FindInApi } from  '../../shared/shared';

@Component({
  selector: 'evennt-detail',
  templateUrl: 'detail.html'
})
export class EventDetailPage {
  event : any;
  constructor(private findInApi : FindInApi, 
              private nav : NavController, 
              private navParams : NavParams, 
              private loader : LoadingController) 
  {
    this.event = navParams.data;
  }

}