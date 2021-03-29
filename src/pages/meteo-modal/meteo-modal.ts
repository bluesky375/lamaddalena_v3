import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import imageMapResize from 'image-map-resizer';
/**
 * Generated class for the MeteoModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meteo-modal',
  templateUrl: 'meteo-modal.html',
})
export class MeteoModalPage {
  tempo: any;
  spiagge: any;
  url: string;
  showControls: boolean = true;
  scale: number = 1;

  constructor(public viewCtrl: ViewController, 
    public loader : LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    private toastCtrl: ToastController) {

    this.tempo = navParams.get('tempo');
    //this.url='http://editor.appturistiche.it:3033/ridosso'+this.tempo.windpath+'.json';
  }

ionViewDidLoad() {
  imageMapResize();
  /*let loader = this.loader.create({
    content: 'Loading ...'});
  loader.present().then(() => {
   this.http.get(this.url).map(res => res.json())
    .subscribe(data =>
    {
      this.spiagge = data;
      loader.dismiss();
    }); 
  });*/
} 

dismissModal() {
    this.viewCtrl.dismiss();
  }
 showTitle(message) {
  let toast = this.toastCtrl.create({
    message: message,
    duration: 3000,
    position: 'middle',
    cssClass: "toast-primary"
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}
afterZoomIn (event) {
    console.log('After ZoomIn Event: ', event);
  }

  afterZoomOut (event) {
    console.log('After ZoomOut Event: ', event);
  }
}
