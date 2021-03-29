import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import * as L from 'leaflet';
import 'leaflet.locatecontrol';

/**
 * Generated class for the MapModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map-modal',
  templateUrl: 'map-modal.html',
})
export class MapModalPage {
  title: string;
  map;
  markersGroup;
  geo: any;

  constructor(public viewCtrl: ViewController, 
    public loader : LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.title = navParams.get('title');
    this.geo = navParams.get('geo');
  }

ionViewDidEnter() {
  console.log(this.geo);
        this.map = L.map("map2",{
        maxZoom: 18,
        minZoom: 12, 
        maxBounds: [
           //SUD OVEST
           [41.1771, 9.3535],
           //NORD EST
           [41.2719, 9.4932]
           ],
        zoomControl:true
    }).setView([this.geo.lat, this.geo.long], 14);
          L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy OpenStreetMap Contributors, ' +
            'CC-BY-SA, ' +
            'Imagery ©'
          }).addTo(this.map);

          this.showMarkers(this.geo);

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

dismissModal() {
    this.viewCtrl.dismiss();
  }
}
