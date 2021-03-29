import { Component, ViewChild } from '@angular/core';
import { Content, NavParams } from 'ionic-angular';
import { LoadingController, NavController, AlertController, ModalController } from 'ionic-angular';
import { FindInApi } from  '../../shared/shared';
import * as Leaflet from 'leaflet';
import 'leaflet.locatecontrol';

@Component({
  selector: 'utility-detail',
  templateUrl: 'utility-detail.html'
})
export class UtilityDetailPage {
  @ViewChild(Content) content: Content;
  title : string;
  sponsors: any;
  taxies: any;
  ferries: any;
  urbanoes: any;
  extraUrbanoes: any;
  trains: any;

  map: Leaflet.Map;
  center: Leaflet.PointTuple;
  modalDismissData: any;

  constructor(private findInApi : FindInApi, 
              private nav : NavController, 
              private navParams : NavParams,
              private modalCtrl: ModalController,
    
              private loader : LoadingController) 
  {
    this.title = navParams.data;
  }

  ionViewDidLoad() {
   let loader = this.loader.create({
      content: 'Loading ...'
    });

    loader.present().then(() => {
      this.findInApi.getUtilities(this.navParams.data).subscribe(data => {
        this.sponsors = data;
        if(this.navParams.data === "TRANSPORT"){
            this.findInApi.getAllTaxies().subscribe(data => {
                this.taxies = data;
                this.ferries = this.sponsors.filter(function(s){ return s.subType === 'ferries'});
                this.urbanoes = this.sponsors.filter(function(s){ return s.subType === 'urbano'});
                this.extraUrbanoes = this.sponsors.filter(function(s){ return s.subType === 'extra_urbano'});
                this.trains = this.sponsors.filter(function(s){ return s.subType === 'trains'});
                loader.dismiss();
            }); 
        }else{
          if(this.navParams.data === "BANCOMAT"){

            var bmIcon = Leaflet.icon({
                iconUrl: 'assets/leaflet/images/bmat-icon.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [-3, -42],
                shadowUrl: 'assets/leaflet/images/marker-shadow.png',
                shadowSize: [41, 41],
                shadowAnchor: [12, 41] 
            });

            setTimeout(() => {
              this.map = Leaflet.map("map",{
                    maxZoom: 18,
                    minZoom: 12, 
                    maxBounds: [
                      //SUD OVEST
                     [41.1771, 9.3535],
                     //NORD EST
                     [41.2719, 9.4932]
                     ],
                    zoomControl:true
                }).setView([41.2126, 9.4070], 16);
                
                Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                      attribution: 'Map data &copy OpenStreetMap Contributors, ' +
                        'CC-BY-SA, ' +
                        'Imagery ©'
                      }).addTo(this.map);

          for (let entry of data) {
              console.log(entry.description+'-'+entry.imageCaption); 
              Leaflet.marker([entry.description, entry.imageCaption],{icon: bmIcon}).addTo(this.map).
              bindPopup(entry.title)
            }
            //Inizio localizzazione
           Leaflet.control.locate({ 
             locateOptions: {
               enableHighAccuracy: true   //Abilita max accuratezza via comb. GPS/PROVIDER
            },
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
           //Fine localizzazione
          
      })

          }
          loader.dismiss();
        }
      });
    });
  }

  call(number) {
    if(!number) return;
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
  openPage(page) {
      this.nav.push(page.component, page.title);
  }
  goToMap(b) {
    this.content.scrollToTop();
     var bmIcon = Leaflet.icon({
                iconUrl: 'assets/leaflet/images/bmat-icon.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [-3, -42],
                shadowUrl: 'assets/leaflet/images/marker-shadow.png',
                shadowSize: [41, 41],
                shadowAnchor: [12, 41] 
            });
     this.map.panTo([b.description,b.imageCaption]);
     Leaflet.marker([b.description, b.imageCaption], {icon: bmIcon}).addTo(this.map).
              bindPopup(b.title).openPopup();
    console.log("tapped");
  }
}