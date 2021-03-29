import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { LoadingController, NavController, AlertController,  ModalController } from 'ionic-angular';

import { MapModalPage } from '../map-modal/map-modal';
import { FindInApi, NetworkService } from  '../../shared/shared';
import * as L from 'leaflet';
import 'leaflet.locatecontrol';

@Component({
  selector: 'service-detail',
  templateUrl: 'detail.html'
})
export class ServiceDetailPage {
  title: string;
  geo: any;
  modalDismissData: any;
  sponsor: any;
  showMapImage : Boolean = true;
  map;
  markersGroup;
  constructor(private findInApi : FindInApi, 
              private nav : NavController, 
              private navParams : NavParams,
              private network : NetworkService,
              private alertCtrl: AlertController,
              private loader : LoadingController,
              private modalCtrl: ModalController) 
  {
    this.sponsor = navParams.data;
    this.showMapImage = network.NoConnection();

    // GET ALL Menus as soon as internet is back
		network.OnConnected().subscribe(()=>{
        this.showMapImage = false;
        
        
    });
    network.OnDisConnected().subscribe(()=>{
        this.showMapImage = true;
        
    });
  }

  ionViewDidLoad() {
   
  }

  call(number) {
    window.open("tel:" + number);
    /*
    let prompt = this.alertCtrl.create({
      title: 'Avviso',
      message: "Sei sicuro di voler chiamare il numero " + number + "?",
      inputs: [],
      buttons: [
        {
          text: 'Annulla',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Chiama',
          handler: data => {
             window.open("tel:" + number);

          }
        }
      ]
    });
    prompt.present(); */
  }

  mailto(email) {
    window.open("mailto:"+email,"_system");
  }

  showMap(geo) {
      
        
          this.map = L.map("map",{
        maxZoom: 18,
        minZoom: 12, 
        maxBounds: [
           //SUD OVEST
           [41.1771, 9.3535],
           //NORD EST
           [41.2719, 9.4932]
           ],
        zoomControl:true
    }).setView([geo.lat, geo.long], 14);
          L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy OpenStreetMap Contributors, ' +
            'CC-BY-SA, ' +
            'Imagery ©'
          }).addTo(this.map);

          this.showMarkers(geo);

          L.control.locate({ 
            keepCurrentZoomLevel: true,
            showPopup: true,
            icon: "fa fa-location-arrow",
            strings: {
                title: "Show me where I am",

                metersUnit: "metri",
                feetUnit: "piedi",
                popup: "Sei qui entro {distance} {unit} da questo punto",
                outsideMapBoundsMsg: "Sembra che tu sia al difuori dei limiti della mappa"
            },
          }).addTo(this.map);


    }

    showMarkers(geo) {
       L.marker([geo.lat, geo.long]).addTo(this.map);
    }
    openMapModal(title, geo) {
    console.log(title);
    const profileModal = this.modalCtrl.create(MapModalPage,{title: title, geo: geo});
    profileModal.onDidDismiss(data => {
      console.log(data);
      this.modalDismissData = JSON.stringify(data);
    });
    profileModal.present();
  }

}