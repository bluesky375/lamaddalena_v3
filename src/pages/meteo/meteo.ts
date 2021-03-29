import { Component } from '@angular/core';
import { LoadingController, NavController, ModalController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { MeteoModalPage } from '../meteo-modal/meteo-modal';

import { FindInApi } from  '../../shared/shared';
import { TregiorniPipe} from '../../pipes/tregiorni/tregiorni';

@Component({
  selector: 'meteo',
  templateUrl: 'meteo.html'
})
export class MeteoPage {
  
  meteos: any;
  modalDismissData: any;
  day: string;
  constructor(private findInApi : FindInApi, 
              private nav : NavController, 
              private loader : LoadingController,
              private modalCtrl: ModalController,
              private http: Http) {

  }
  ngOnInit() {
    this.day = '0';
  }

  ionViewDidLoad() {
   let loader = this.loader.create({
      content: 'Loading ...'
    });

    loader.present().then(() => {
      //
      this.http.get('http://editor.appturistiche.it:3033/previsioni3_777.json').map(res => res.json()).subscribe(data =>
  {
    
    this.meteos = data; 
    console.log(this.meteos);
     loader.dismiss();
  });
      //
    });
  }

  segmentChanged(ev: any) {
   console.log('Cambiato segmento:',ev.value);
    this.day = ev.value;
    
  }

  caricaSpiagge(direzione) {
    console.log('Direzione:'+direzione)
  }

  openModal(tempo) {
    console.log(tempo);
    const profileModal = this.modalCtrl.create(MeteoModalPage,{tempo: tempo});
    profileModal.onDidDismiss(data => {
      console.log(data);
      this.modalDismissData = JSON.stringify(data);
    });
    profileModal.present();
  }

}
