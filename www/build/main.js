webpackJsonp([0],{

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/map-modal/map-modal.module": [
		199
	],
	"../pages/meteo-modal/meteo-modal.module": [
		201
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 198;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModalPageModule", function() { return MapModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_modal__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MapModalPageModule = (function () {
    function MapModalPageModule() {
    }
    MapModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__map_modal__["a" /* MapModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__map_modal__["a" /* MapModalPage */]),
            ],
        })
    ], MapModalPageModule);
    return MapModalPageModule;
}());

//# sourceMappingURL=map-modal.module.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet_locatecontrol__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet_locatecontrol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet_locatecontrol__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MapModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapModalPage = (function () {
    function MapModalPage(viewCtrl, loader, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.loader = loader;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = navParams.get('title');
        this.geo = navParams.get('geo');
    }
    MapModalPage.prototype.ionViewDidEnter = function () {
        console.log(this.geo);
        this.map = __WEBPACK_IMPORTED_MODULE_2_leaflet__["map"]("map2", {
            maxZoom: 18,
            minZoom: 12,
            maxBounds: [
                //SUD OVEST
                [41.1771, 9.3535],
                //NORD EST
                [41.2719, 9.4932]
            ],
            zoomControl: true
        }).setView([this.geo.lat, this.geo.long], 14);
        __WEBPACK_IMPORTED_MODULE_2_leaflet__["tileLayer"]('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy OpenStreetMap Contributors, ' +
                'CC-BY-SA, ' +
                'Imagery ©'
        }).addTo(this.map);
        this.showMarkers(this.geo);
        __WEBPACK_IMPORTED_MODULE_2_leaflet__["control"].locate({
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
    };
    MapModalPage.prototype.showMarkers = function (geo) {
        __WEBPACK_IMPORTED_MODULE_2_leaflet__["marker"]([geo.lat, geo.long]).addTo(this.map);
    };
    MapModalPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    MapModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-map-modal',template:/*ion-inline-start:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\map-modal\map-modal.html"*/'<!--\n  Generated template for the MapModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	 <ion-buttons end>\n    <button ion-button icon-only (click)="dismissModal()">\n      <ion-icon name="close"></ion-icon>\n    </button>\n  </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n       <div id="map2">\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\map-modal\map-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], MapModalPage);
    return MapModalPage;
}());

//# sourceMappingURL=map-modal.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeteoModalPageModule", function() { return MeteoModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meteo_modal__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MeteoModalPageModule = (function () {
    function MeteoModalPageModule() {
    }
    MeteoModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__meteo_modal__["a" /* MeteoModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__meteo_modal__["a" /* MeteoModalPage */])
            ],
        })
    ], MeteoModalPageModule);
    return MeteoModalPageModule;
}());

//# sourceMappingURL=meteo-modal.module.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeteoModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_image_map_resizer__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_image_map_resizer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_image_map_resizer__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MeteoModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MeteoModalPage = (function () {
    function MeteoModalPage(viewCtrl, loader, navCtrl, navParams, http, toastCtrl) {
        this.viewCtrl = viewCtrl;
        this.loader = loader;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.showControls = true;
        this.scale = 1;
        this.tempo = navParams.get('tempo');
        //this.url='http://editor.appturistiche.it:3033/ridosso'+this.tempo.windpath+'.json';
    }
    MeteoModalPage.prototype.ionViewDidLoad = function () {
        __WEBPACK_IMPORTED_MODULE_3_image_map_resizer___default()();
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
    };
    MeteoModalPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    MeteoModalPage.prototype.showTitle = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'middle',
            cssClass: "toast-primary"
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    MeteoModalPage.prototype.afterZoomIn = function (event) {
        console.log('After ZoomIn Event: ', event);
    };
    MeteoModalPage.prototype.afterZoomOut = function (event) {
        console.log('After ZoomOut Event: ', event);
    };
    MeteoModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-meteo-modal',template:/*ion-inline-start:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\meteo-modal\meteo-modal.html"*/'<!--\n  Generated template for the MeteoModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	 <ion-buttons end>\n    <button ion-button icon-only (click)="dismissModal()">\n      <ion-icon name="close"></ion-icon>\n    </button>\n  </ion-buttons>\n    <ion-title>{{\'SPIAGGE_RIPARATE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-card style="background-color:#03011b;">\n   <span style="color:white; font-size:0.75em; font-style: italic; margin-left:4px;"> {{\'CLICKONMAPBEACHES\' | translate }}</span>\n\n<img *ngIf="tempo.windmagn <15" src="http://editor.appturistiche.it:3033/ridosso-images/1-riparate-{{tempo.windpath}}.jpg" usemap="#image-map">\n<img *ngIf="tempo.windmagn >=15 && tempo.windmagn <=39" src="http://editor.appturistiche.it:3033/ridosso-images/2-riparate-{{tempo.windpath}}.jpg" usemap="#image-map">\n<img *ngIf="tempo.windmagn>39"src="http://editor.appturistiche.it:3033/ridosso-images/3-riparate-{{tempo.windpath}}.jpg" usemap="#image-map">\n\n </ion-card>\n <ion-row>\n   <ion-col>\n    <div class="ion-text-center">\n      <img width="50px" src="./assets/images/grado-riparato.png"> <br><span style="font-size:0.75em">{{\'RIPARATO\' | translate }}</span> \n    </div>\n  </ion-col>\n\n  <ion-col>\n      <div class="ion-text-center">\n        <img width="50px" src="./assets/images/grado-brezza.png"> <br><span style="font-size:0.75em">{{\'BREZZA\' | translate }}</span>\n      </div>\n  </ion-col>\n   <ion-col>\n     <div class="ion-text-center">\n      <img width="50px"src="./assets/images/grado-esposto.png"> <br><span style="font-size:0.75em">{{\'ESPOSTO\' | translate }}</span>\n    </div>\n  </ion-col>\n   <ion-col> <div class="ion-text-center">\n    <img width="50px" src="./assets/images/grado-molto-esposto.png"> <br><span style="font-size:0.75em">{{\'MOLTO_ESPOSTO\' | translate }}</span>\n  </div>\n</ion-col>\n </ion-row>\n\n<!--	<ion-card *ngFor="let s of spiagge">\n	<ion-card-content *ngIf="s.loc || s.indicazioni">\n      <ion-card-title>{{s.loc}}</ion-card-title>\n       <div [innerHTML]="s.indicazioni"></div>\n    </ion-card-content>\n</ion-card> -->\n<!-- Image Map Generated by http://www.image-map.net/ -->\n<map name="image-map">\n    <area (click)="showTitle(\'Cala Lunga di Razzoli\')" target="" alt="Cala Lunga di Razzoli" title="Cala Lunga di Razzoli" href="javascript:void(0);" coords="38,83,19" shape="circle">\n    <area (click)="showTitle(\'Porto della Madonna\')" target="" alt="Porto della Madonna" title="Porto della Madonna" href="javascript:void(0);" coords="130,127,18" shape="circle">\n    <area (click)="showTitle(\'Cala Santa Maria\')" target="" alt="Cala Santa Maria" title="Cala Santa Maria" href="javascript:void(0);" coords="217,138,19" shape="circle">\n    <area (click)="showTitle(\'Spiaggia del Cavaliere\')" target="" alt="Spiaggia del Cavaliere" title="Spiaggia del Cavaliere" href="javascript:void(0);" coords="185,191,19" shape="circle">\n    <area (click)="showTitle(\'Spiaggia Rosa\')" target="" alt="Spiaggia Rosa" title="Spiaggia Rosa" href="javascript:void(0);" coords="140,235,19" shape="circle">\n    <area (click)="showTitle(\'Cala Bonifazinca\')" target="" alt="Cala Bonifazinca" title="Cala Bonifazinca" href="javascript:void(0);" coords="134,292,18" shape="circle">\n    <area (click)="showTitle(\'Cala Ferrigno\')" target="" alt="Cala Ferrigno" title="Cala Ferrigno" href="javascript:void(0);" coords="170,323,20" shape="circle">\n    <area (click)="showTitle(\'Cala Conneri\')" target="" alt="Cala Conneri" title="Cala Conneri" href="javascript:void(0);" coords="167,371,21" shape="circle">\n    <area (click)="showTitle(\'Cala Granara\')" target="" alt="Cala Granara" title="Cala Granara" href=" #" coords="145,413,19" shape="circle">\n    <area (click)="showTitle(\'Cala Soraya\')" target="" alt="Cala Soraya" title="Cala Soraya" href="javascript:void(0);" coords="119,451,20" shape="circle">\n    <area (click)="showTitle(\'Cala Corsara\')" target="" alt="Cala Corsara" title="Cala Corsara" href="javascript:void(0);" coords="70,456,20" shape="circle">\n    <area (click)="showTitle(\'Cala d Alga\')" target="" alt="Cala d\'Alga" title="Cala d\'Alga" href="javascript:void(0);" coords="27,428,19" shape="circle">\n    <area (click)="showTitle(\'Il Cardellino\')" target="" alt="Il Cardellino" title="Il Cardellino" href="javascript:void(0);" coords="316,245,20" shape="circle">\n    <area (click)="showTitle(\'Monti da Rena\')" target="" alt="Monti d\'a Rena" title="Monti d\'a Rena" href="javascript:void(0);" coords="274,223,18" shape="circle">\n    <area (click)="showTitle(\'Lo Strangolato\')" target="" alt="Lo Strangolato" title="Lo Strangolato" href="javascript:void(0);" coords="241,251,19" shape="circle">\n    <area (click)="showTitle(\'Il Morto\')" target="" alt="Il Morto" title="Il Morto" href="javascript:void(0);" coords="243,291,21" shape="circle">\n    <area (click)="showTitle(\'Bassa Trinita\')" target="" alt="Bassa Trinita" title="Bassa Trinita" href="javascript:void(0);" coords="217,320,19" shape="circle">\n    <area (click)="showTitle(\'Cala di Inferno\')" target="" alt="Cala di Inferno" title="Cala di Inferno" href="javascript:void(0);" coords="218,371,20" shape="circle">\n    <area (click)="showTitle(\'Carlotto\')" target="" alt="Carlotto" title="Carlotto" href="javascript:void(0);" coords="189,438,19" shape="circle">\n    <area (click)="showTitle(\'Nido d Aquila\')" target="" alt="Nido d\'Aquila" title="Nido d\'Aquila" href="javascript:void(0);" coords="172,494,20" shape="circle">\n    <area (click)="showTitle(\'Punta Tegge\')" target="" alt="Punta Tegge" title="Punta Tegge" href="javascript:void(0);" coords="203,529,19" shape="circle">\n    <area (click)="showTitle(\'Il Pesce\')" target="" alt="Il Pesce" title="Il Pesce" href="javascript:void(0);" coords="265,534,20" shape="circle">\n    <area (click)="showTitle(\'Cala Lunga di Porto Massimo\')" target="" alt="Cala Lunga di Porto Massimo" title="Cala Lunga di Porto Massimo" href="javascript:void(0);" coords="422,245,21" shape="circle">\n    <area (click)="showTitle(\'Il Costone\')" target="" alt="Il Costone" title="Il Costone" href="javascript:void(0);" coords="448,278,19" shape="circle">\n    <area (click)="showTitle(\'Spalmatore\')" target="" alt="Spalmatore" title="Spalmatore" href="javascript:void(0);" coords="439,319,20" shape="circle">\n    <area (click)="showTitle(\'Capocchia du Purpu\')" target="" alt="Capocchia d\'u Purpu" title="Capocchia d\'u Purpu" href="javascript:void(0);" coords="426,407,20" shape="circle">\n    <area (click)="showTitle(\'Cala Garibaldi\')" target="" alt="Cala Garibaldi" title="Cala Garibaldi" href="javascript:void(0);" coords="459,447,20" shape="circle">\n    <area (click)="showTitle(\'Cala Serena\')" target="" alt="Cala Serena" title="Cala Serena" href="javascript:void(0);" coords="464,399,20" shape="circle">\n    <area (click)="showTitle(\'Cala Caprarese\')" target="" alt="Cala Caprarese" title="Cala Caprarese" href="javascript:void(0);" coords="460,359,20" shape="circle">\n    <area (click)="showTitle(\'Cala Napoletana\')" target="" alt="Cala Napoletana" title="Cala Napoletana" href="javascript:void(0);" coords="480,323,20" shape="circle">\n    <area (click)="showTitle(\'Cala Crucitta\')" target="" alt="Cala Crucitta" title="Cala Crucitta" href="javascript:void(0);" coords="555,331,19" shape="circle">\n    <area (click)="showTitle(\'Cala Coticcio\')" target="" alt="Cala Coticcio" title="Cala Coticcio" href="javascript:void(0);" coords="584,484,20" shape="circle">\n    <area (click)="showTitle(\'Cala Brigantina\')" target="" alt="Cala Brigantina" title="Cala Brigantina" href="javascript:void(0);" coords="591,535,19" shape="circle">\n    <area (click)="showTitle(\'I Due Mari\')" target="" alt="I Due Mari" title="I Due Mari" href="javascript:void(0);" coords="551,598,19" shape="circle">\n    <area (click)="showTitle(\'Il Relitto\')" target="" alt="Il Relitto" title="Il Relitto" href="javascript:void(0);" coords="595,676,19" shape="circle">\n    <area (click)="showTitle(\'Cala Andreani\')" target="" alt="Cala Andreani" title="Cala Andreani" href="javascript:void(0);" coords="565,716,19" shape="circle">\n    <area (click)="showTitle(\'La Conchiglia\')" target="" alt="La Conchiglia" title="La Conchiglia" href="javascript:void(0);" coords="475,698,20" shape="circle">\n    <area (click)="showTitle(\'Doggie Beach\')" target="" alt="Doggie Beach" title="Doggie Beach" href="javascript:void(0);" coords="426,677,20" shape="circle">\n    <area (click)="showTitle(\'Cala Baccà\')" target="" alt="Cala Baccà" title="Cala Baccà" href="javascript:void(0);" coords="382,652,21" shape="circle">\n</map>\n</ion-content>\n'/*ion-inline-end:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\meteo-modal\meteo-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], MeteoModalPage);
    return MeteoModalPage;
}());

//# sourceMappingURL=meteo-modal.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__findin_api_service__ = __webpack_require__(348);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__findin_api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__network_service__ = __webpack_require__(280);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__network_service__["a"]; });


//# sourceMappingURL=shared.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NetworkService = (function () {
    function NetworkService(network) {
        this.network = network;
    }
    NetworkService.prototype.NoConnection = function () {
        console.log("Non Connesso");
        return (this.network.type === 'none');
    };
    NetworkService.prototype.OnConnected = function () {
        console.log("Connesso");
        return this.network.onConnect();
    };
    NetworkService.prototype.OnDisConnected = function () {
        console.log("DisConnesso");
        return this.network.onDisconnect();
    };
    NetworkService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_network__["a" /* Network */]])
    ], NetworkService);
    return NetworkService;
}());

//# sourceMappingURL=network-service.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(292);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export createTranslateLoader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pages__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_pipes_module__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_meteo_modal_meteo_modal_module__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_map_modal_map_modal_module__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_image_loader__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_order_pipe__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ngx_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_global__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_network__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_app_rate__ = __webpack_require__(255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pages__["p" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pages__["c" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pages__["e" /* EventListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pages__["d" /* EventDetailPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pages__["f" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pages__["g" /* IntroductionPage */],
                // Beaches
                __WEBPACK_IMPORTED_MODULE_7__pages_pages__["b" /* BeachesPage */], __WEBPACK_IMPORTED_MODULE_7__pages_pages__["a" /* BeachDetailPage */],
                // Places
                __WEBPACK_IMPORTED_MODULE_7__pages_pages__["l" /* PlacesPage */], __WEBPACK_IMPORTED_MODULE_7__pages_pages__["k" /* PlaceDetailPage */],
                // Services
                __WEBPACK_IMPORTED_MODULE_7__pages_pages__["o" /* ServicesPage */], __WEBPACK_IMPORTED_MODULE_7__pages_pages__["m" /* ServiceDetailPage */], __WEBPACK_IMPORTED_MODULE_7__pages_pages__["q" /* SubServicesPage */], __WEBPACK_IMPORTED_MODULE_7__pages_pages__["r" /* UtilityDetailPage */], __WEBPACK_IMPORTED_MODULE_7__pages_pages__["n" /* ServiceListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pages__["j" /* OtherPage */], __WEBPACK_IMPORTED_MODULE_7__pages_pages__["i" /* OffersPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pages__["h" /* MeteoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__pages_meteo_modal_meteo_modal_module__["MeteoModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_10__pages_map_modal_map_modal_module__["MapModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_11_ionic_image_loader__["b" /* IonicImageLoader */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_ngx_order_pipe__["OrderModule"],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/map-modal/map-modal.module#MapModalPageModule', name: 'MapModalPage', segment: 'map-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/meteo-modal/meteo-modal.module#MeteoModalPageModule', name: 'MeteoModalPage', segment: 'meteo-modal', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pages__["p" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pages__["c" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pages__["e" /* EventListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pages__["d" /* EventDetailPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pages__["f" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pages__["g" /* IntroductionPage */],
                // Beaches
                __WEBPACK_IMPORTED_MODULE_7__pages_pages__["b" /* BeachesPage */], __WEBPACK_IMPORTED_MODULE_7__pages_pages__["a" /* BeachDetailPage */],
                // Places
                __WEBPACK_IMPORTED_MODULE_7__pages_pages__["l" /* PlacesPage */], __WEBPACK_IMPORTED_MODULE_7__pages_pages__["k" /* PlaceDetailPage */],
                // Services
                __WEBPACK_IMPORTED_MODULE_7__pages_pages__["o" /* ServicesPage */], __WEBPACK_IMPORTED_MODULE_7__pages_pages__["m" /* ServiceDetailPage */], __WEBPACK_IMPORTED_MODULE_7__pages_pages__["q" /* SubServicesPage */], __WEBPACK_IMPORTED_MODULE_7__pages_pages__["r" /* UtilityDetailPage */], __WEBPACK_IMPORTED_MODULE_7__pages_pages__["n" /* ServiceListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pages__["j" /* OtherPage */], __WEBPACK_IMPORTED_MODULE_7__pages_pages__["i" /* OffersPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pages__["h" /* MeteoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_app_rate__["a" /* AppRate */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_14__app_global__["a" /* AppState */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, 'assets/i18n/', '.json');
}
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_global__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_rate__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pages__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, findInApi, menu, translate, global, storage, alertCtrl, appRate) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.findInApi = findInApi;
        this.menu = menu;
        this.translate = translate;
        this.global = global;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.appRate = appRate;
        // make DashboardPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_pages__["c" /* DashboardPage */];
        this._mainMenuName = 'mainMenu';
        translate.setDefaultLang('it');
        this.initializeApp();
        this.storage.get('theme').then(function (val) {
            console.log('Tema:' + val);
            if (val) {
                _this.global.set('theme', val);
            }
            else {
                _this.global.set('theme', 'theme-dark');
            }
        });
        this.storage.get('lang').then(function (lang) {
            _this.global.set('lang', lang);
            console.log('Lingua :' + lang);
            if (lang) {
                translate.setDefaultLang(lang);
            }
            else {
                if (navigator.language.substring(0, 2) == 'it') {
                    console.log(navigator.language.substring(0, 2));
                    _this.global.set('lang', 'it');
                    _this.storage.set('lang', 'it');
                }
                else {
                    _this.global.set('lang', 'en');
                    _this.storage.set('lang', 'en');
                }
            }
        });
        this.storage.get('privacy_read').then(function (privacy_read) {
            _this.global.set('privacy_read', privacy_read);
            console.log('Privacy? :' + privacy_read);
            if (privacy_read == true) { }
            else {
                if (_this.alert) {
                    _this.alert.dismiss();
                    _this.alert = null;
                }
                else {
                    if (_this.global.get('lang') == 'en') {
                        var title_alert = 'We take care of your personal data';
                        var message_alert = 'Please read the notice according to the GDPR 2016/679, in which we describe the attention, the lawfulness and the purposes of the processing of your personal data.';
                        var btnCancel_alert = 'Continue';
                        var btnOk_alert = 'Read Notice';
                    }
                    else {
                        var title_alert = 'Abbiamo cura dei tuoi dati personali';
                        var message_alert = 'Ti preghiamo di leggere l\'informativa ai sensi del GDPR 2016/679, nella quale ti descriviamo l\'attenzione, la liceità e le finalità del trattamento dei tuoi dati personali.';
                        var btnCancel_alert = 'Prosegui';
                        var btnOk_alert = 'Leggi Informativa';
                    }
                    _this.alert = _this.alertCtrl.create({
                        title: title_alert,
                        message: message_alert,
                        buttons: [
                            {
                                text: btnOk_alert,
                                handler: function () {
                                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_pages__["j" /* OtherPage */]);
                                }
                            },
                            {
                                text: btnCancel_alert,
                                role: 'cancel',
                                handler: function () {
                                    _this.alert = null;
                                }
                            }
                        ]
                    });
                    _this.alert.present();
                }
                _this.global.set('privacy_read', true);
                _this.storage.set('privacy_read', true);
            }
        });
        // Menus which have sub menu items
        this.navigationMenus = [
            { title: 'SERVICES', component: __WEBPACK_IMPORTED_MODULE_8__pages_pages__["o" /* ServicesPage */], image: 'assets/images/services.png' },
            { title: 'UTILITY', component: __WEBPACK_IMPORTED_MODULE_8__pages_pages__["q" /* SubServicesPage */], image: 'assets/images/help_info.png' },
            { title: 'BEACHES', component: __WEBPACK_IMPORTED_MODULE_8__pages_pages__["b" /* BeachesPage */], image: 'assets/images/beaches.png' },
            { title: 'PLACES', component: __WEBPACK_IMPORTED_MODULE_8__pages_pages__["l" /* PlacesPage */], image: 'assets/images/places.png' }
        ];
        // set our app menu pages
        this.appMenus = [
            { title: 'METEO', component: __WEBPACK_IMPORTED_MODULE_8__pages_pages__["h" /* MeteoPage */], image: 'assets/images/meteo.png' },
            { title: 'EVENTS', component: __WEBPACK_IMPORTED_MODULE_8__pages_pages__["e" /* EventListPage */], image: 'assets/images/events.png' },
            { title: 'INTRODUCTION', component: __WEBPACK_IMPORTED_MODULE_8__pages_pages__["g" /* IntroductionPage */], image: 'assets/images/introduction.png' },
            { title: 'HISTORY', component: __WEBPACK_IMPORTED_MODULE_8__pages_pages__["f" /* HistoryPage */], image: 'assets/images/history.png' },
            { title: 'Yesconticino', component: __WEBPACK_IMPORTED_MODULE_8__pages_pages__["i" /* OffersPage */], image: 'assets/images/yesconticino.png' }
        ];
        // set our service menu pages
        this.serviceMenus = [
            { title: 'SETTINGS', component: __WEBPACK_IMPORTED_MODULE_8__pages_pages__["p" /* SettingsPage */], image: 'assets/images/settings.svg' },
            { title: 'CONTACT_US', component: __WEBPACK_IMPORTED_MODULE_8__pages_pages__["c" /* DashboardPage */], image: 'assets/images/contact.svg' },
            { title: 'RATE_APP', component: __WEBPACK_IMPORTED_MODULE_8__pages_pages__["c" /* DashboardPage */], image: 'assets/images/rateapp.svg' },
            { title: 'PRIVACY', component: __WEBPACK_IMPORTED_MODULE_8__pages_pages__["j" /* OtherPage */], image: 'assets/images/privacy.svg' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.menu.enable(true, this._mainMenuName);
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            // Stop splash screen when all data is loaded 
            _this.findInApi.loadAllData().subscribe(function (data) {
                _this.splashScreen.hide();
                console.log('NASCONDO SPLASH');
            });
            // Set Back Button Functionality for app
            _this._setBackButtonFunctionality();
        });
    };
    MyApp.prototype.goHome = function () {
        this.menu.close();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_pages__["c" /* DashboardPage */]);
    };
    MyApp.prototype.openPage = function (page) {
        switch (page.title) {
            case "CONTACT_US":
                window.location.href = "mailto: supporto@appturistiche.it?subject=Richiesta%20da%20La%20Maddalena%20Arcipelago";
                break;
            case "RATE_APP":
                if (this.global.get('lang') == 'it') {
                    this.appRate.preferences.useLanguage = 'it';
                }
                this.appRate.preferences.displayAppName = 'La Maddalena Arcipelago';
                this.appRate.preferences.storeAppURL = {
                    ios: '1002093403',
                    android: 'market://details?id=it.findin.lamaddalena'
                    //windows: 'ms-windows-store://review/?ProductId=< Store_ID >'
                };
                this.appRate.promptForRating(true);
                break;
            default:
                this.menu.close();
                if (page.title === "UTILITY") {
                    this.nav.push(page.component, page.title);
                }
                else {
                    this.nav.setRoot(page.component);
                }
                break;
        }
    };
    MyApp.prototype._setBackButtonFunctionality = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            console.log(_this.nav);
            if (_this.nav.canGoBack()) {
                _this.nav.pop();
            }
            else {
                /*
                if(this.alert){
                  this.alert.dismiss();
                  this.alert =null;
                }
                else {
                   
                   this.alert = this.alertCtrl.create({
                                                          title: 'Uscita?',
                                                          message: 'Vuoi uscire da Findin?',
                                                          buttons: [
                                                            {
                                                              text: 'Annulla',
                                                              role: 'cancel',
                                                              handler: () => {
                                                                this.alert =null;
                                                              }
                                                            },
                                                            {
                                                              text: 'Esci',
                                                              handler: () => {
                                                                this.platform.exitApp();
                                                              }
                                                            }
                                                          ]
                                                        });
                    this.alert.present();
                }
            */
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\app\app.html"*/'<div class="{{global.state[\'theme\']}}">\n  <ion-menu [content]="content" id="mainMenu" class="main-menu">\n    <ion-content\n      style="background-image: url(\'assets/images/bg-black.jpg\'); color: white"\n    >\n      <ion-list>\n        <ion-item text-center>\n          <img\n            *ngIf="global.state[\'theme\'] == \'theme-light\'"\n            class="title-image"\n            style="height: 70px"\n            src="assets/images/logo-black.jpg"\n            center\n            (click)="goHome()"\n          />\n          <img\n            *ngIf="global.state[\'theme\'] != \'theme-light\'"\n            class="title-image"\n            style="height: 70px"\n            src="assets/images/logo-bianco.png"\n            center\n            (click)="goHome()"\n          />\n\n          <!--<h5 text-center>{{ \'APP_MENU\' | translate }}</h5> -->\n        </ion-item>\n        <button\n          ion-item\n          *ngFor="let p of navigationMenus"\n          (click)="openPage(p)"\n        >\n          <ion-avatar item-left>\n            <img [src]="p.image" />\n          </ion-avatar>\n          <h2>{{p.title | translate | uppercase }}</h2>\n        </button>\n\n        <ion-item *ngFor="let p of appMenus" (click)="openPage(p)">\n          <ion-avatar item-left>\n            <img [src]="p.image" />\n          </ion-avatar>\n          <h2>{{p.title | translate | uppercase}}</h2>\n        </ion-item>\n      </ion-list>\n      <ion-list>\n        <ion-list-header> {{ \'SERVICE_MENUS\' | translate }}</ion-list-header>\n\n        <ion-item *ngFor="let p of serviceMenus" (click)="openPage(p)">\n          <ion-avatar item-left>\n            <img [src]="p.image" />\n          </ion-avatar>\n          <h2>{{p.title | translate | uppercase}}</h2>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n</div>\n'/*ion-inline-end:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\app\app.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__shared_shared__["a" /* FindInApi */],
                __WEBPACK_IMPORTED_MODULE_9__shared_shared__["b" /* NetworkService */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_9__shared_shared__["a" /* FindInApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__app_global__["a" /* AppState */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_rate__["a" /* AppRate */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_global__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardPage = (function () {
    function DashboardPage(global, menu) {
        this.global = global;
        this.menu = menu;
        this.currentTheme = global.get('theme');
    }
    DashboardPage.prototype.callMenu = function () {
        this.menu.open();
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard',template:/*ion-inline-start:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\dashboard\dashboard.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="main-menu dashboard" padding style="color: white">\n  <div style="border: none; text-align:center">\n        <img class="title-image" style="height: 90px" src="assets/images/logo-bianco.png" (click)="callMenu()">\n  </div>\n  <!--<h5 text-center style="margin:0; color:white;">\n      {{ \'DASHBOARD.LOGO_TEXT\' | translate }}\n  </h5> -->\n  <!--<div style="background-color:red;"><p style="margin-top: 90%; color:white;" text-center>\n    {{ \'DASHBOARD.BOTTOM_TEXT\' | translate }}  </p></div> -->\n\n</ion-content>\n<ion-footer text-center text-justify>\n{{ \'DASHBOARD.BOTTOM_TEXT\' | translate }}\n</ion-footer>'/*ion-inline-end:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\dashboard\dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppState */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventListPage = (function () {
    function EventListPage(findInApi, nav, alertCtrl, translateService, loader) {
        this.findInApi = findInApi;
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
        this.loader = loader;
        this.events = [];
        this.selectedFilter = 'all';
        this.eventTypes = [
            { value: 'all', name: 'ALL' },
            { value: 'culture', name: 'CULTURE' },
            { value: 'music', name: 'MUSIC' },
            { value: 'movie', name: 'MOVIE' },
            { value: 'party', name: 'PARTY' },
            { value: 'sport', name: 'SPORT' },
            { value: 'theater', name: 'THEATER' },
            { value: 'tradition', name: 'TRADITION' }
        ];
        this.monthNames = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
    }
    EventListPage.prototype.ionViewDidLoad = function () {
        this._getAllEvents(undefined);
    };
    EventListPage.prototype.itemTapped = function ($event, item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__pages__["d" /* EventDetailPage */], item);
    };
    EventListPage.prototype.openFilter = function ($event) {
        var _this = this;
        var alert = this.alertCtrl.create();
        this.translateService.get('SELECT_EVENT_TYPE').subscribe(function (res) {
            alert.setTitle(res);
        });
        for (var i = 0; i < this.eventTypes.length; i++) {
            var ev = this.eventTypes[i];
            this.translateService.get('EVENT_TYPE.' + ev.name).subscribe(function (res) {
                alert.addInput({ type: 'radio', label: res, value: ev.value, checked: ev.value === _this.selectedFilter });
            });
        }
        this.translateService.get('CANCEL').subscribe(function (res) {
            alert.addButton(res);
        });
        var okText = "OK";
        this.translateService.get(okText).subscribe(function (res) {
            okText = res;
        });
        alert.addButton({
            text: okText,
            handler: function (data) {
                _this.testRadioOpen = false;
                _this.selectedFilter = data;
                if (_this.selectedFilter === 'all')
                    _this._getAllEvents(undefined);
                else
                    _this._getAllEvents(_this.selectedFilter);
            }
        });
        alert.present();
    };
    EventListPage.prototype._getAllEvents = function (eventType) {
        var _this = this;
        this.events = [];
        var loader = this.loader.create({
            content: 'Loading ...'
        });
        loader.present().then(function () {
            _this.findInApi.getAllEvents(eventType).subscribe(function (data) {
                for (var i = 0; i < data.length; i++) {
                    var ev = data[i];
                    ev.imgLogo = 'assets/images/' + ev.subType + '.png';
                    // console.log(ev.startDate+';'+ev.title+';'+ev.created+';'+ev.updated);
                    if (ev.startDate) {
                        var startDt = new Date(ev.startDate);
                        var year = startDt.getFullYear();
                        var month = startDt.getMonth();
                        var _obj = {
                            month: month,
                            year: year,
                            monthName: _this.monthNames[month],
                            events: []
                        };
                        var groupFound = false;
                        for (var j = 0; j < _this.events.length; j++) {
                            var grp = _this.events[j];
                            if (grp.month === month && grp.year === year) {
                                groupFound = true;
                                _obj = grp;
                            }
                        }
                        _obj.events.push(ev);
                        if (!groupFound) {
                            _this.events.push(_obj);
                        }
                    }
                }
                loader.dismiss();
            });
        });
    };
    EventListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'events',template:/*ion-inline-start:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\events\events.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'EVENTS\' | translate}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openFilter($event)">\n        <ion-icon name="funnel"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-image: url(\'assets/images/bg-black.jpg\'); color: white" class="main-menu">\n  \n  <ion-list *ngFor="let grp of events">\n    <ion-list-header>\n       {{ grp.monthName | translate}}\n    </ion-list-header>\n    \n    <button ion-item *ngFor="let p of grp.events | orderBy: \'startDate\'" (click)="itemTapped($event,p)">\n        <ion-avatar item-left>\n          <h2 style="text-align:center;font-size:25px;font-weight:bold">{{p.startDate | date : \'dd\'}}</h2>\n          <img-loader [src]="p.imgLogo" useImg></img-loader>\n        </ion-avatar>\n       <h3 class="events-list-title">{{p.title | translate | uppercase }}</h3>\n        <p class="events-p" *ngIf=p.startTime> h.{{p.startTime}} - {{p.location}}</p>\n        <p class="events-p" *ngIf="p.startTime==null"> {{p.location}}</p>\n        <p class="events-p" [innerHTML]="p.description"></p>\n      </button>\n  </ion-list> \n</ion-content>\n<ion-footer></ion-footer>'/*ion-inline-end:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\events\events.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_shared__["a" /* FindInApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], EventListPage);
    return EventListPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindInApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__network_service__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_image_loader__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FindInApi = (function () {
    function FindInApi(http, storage, translateService, imageLoader, network) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.translateService = translateService;
        this.imageLoader = imageLoader;
        this.network = network;
        this.baseUrl = 'http://editor.appturistiche.it:3033/api/menus?appId=58e2b3ac28ec4e3c47f2d8e3';
        this._menusStorageKey = 'menusData';
        this._lastUpdatedDateKey = 'lastUpdatedDate';
        this._lang = 'lang';
        // Set menu items from local storage
        storage.get(this._menusStorageKey).then(function (val) {
            _this.menus = val;
        });
        // Set last updated date
        storage.get(this._lastUpdatedDateKey).then(function (val) {
            _this.lastUpdatedDate = val;
        });
        // Get and set current language
        storage.get(this._lang).then(function (val) {
            _this.translateService.currentLang = val;
        });
        // GET ALL Menus as soon as internet is back
        network.OnConnected().subscribe(function () {
            _this.getAllMenus('');
        });
    }
    FindInApi.prototype.getAllMenus = function (type, subType) {
        var _this = this;
        if (subType === void 0) { subType = null; }
        var currentLanguage = this.translateService.currentLang || 'it';
        if (type == "event") {
            currentLanguage = 'it';
        }
        // If no internet connection
        if (this.menus && this.menus.length > 0) {
            // Check if we have data in internal storage or not.
            // then return data from internal storage
            return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
                var filtered = _this.menus.filter(function (m) {
                    if (subType) {
                        return (m.language === currentLanguage && m.type === type && m.subType == subType.toLowerCase());
                    }
                    else {
                        return (m.language === currentLanguage && m.type === type);
                    }
                }).sort(function (a, b) {
                    return a.created > b.created;
                });
                observer.next(filtered);
                observer.complete();
            });
        }
        else {
            return this.http.get(this.baseUrl)
                .map(function (response) {
                _this.menus = response.json();
                _this._downloadAllImages();
                _this.storage.set(_this._menusStorageKey, _this.menus);
                var filtered = _this.menus.filter(function (m) {
                    return m.type === type;
                }).sort(function (a, b) {
                    return a.created > b.created;
                });
                return filtered;
            });
        }
    };
    // Get All histories
    FindInApi.prototype.getHistories = function () {
        return this.getAllMenus('history');
    };
    // GET All introductions
    FindInApi.prototype.getIntroductions = function () {
        return this.getAllMenus('introduction');
    };
    // GET All Places
    FindInApi.prototype.getPlaces = function (type) {
        return this.getAllMenus('place', type);
    };
    // GET All Beaches
    FindInApi.prototype.getBeaches = function (type) {
        return this.getAllMenus('beach', type);
    };
    // GET All Beaches
    FindInApi.prototype.getSponsors = function (type) {
        return this.getAllMenus('sponsor', type);
    };
    // GET All Beaches
    FindInApi.prototype.getUtilities = function (type) {
        return this.getAllMenus(type.toLowerCase());
    };
    FindInApi.prototype.getAllTaxies = function () {
        return this.getAllMenus('sponsor', 'taxi');
    };
    // GET All Beaches
    FindInApi.prototype.getAllEvents = function (type) {
        return this.getAllMenus('event', type);
    };
    // Load ALL Data 
    FindInApi.prototype.loadAllData = function () {
        return this.getAllMenus('');
    };
    FindInApi.prototype.getById = function (id) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
            _this.getSponsors(undefined).subscribe(function (data) {
                var list = data.filter(function (s) { return s._id === id; });
                observer.next(list[0]);
                observer.complete();
            });
        });
    };
    FindInApi.prototype._downloadAllImages = function () {
        for (var i = 0; i < this.menus.length; i++) {
            var menu = this.menus[i];
            if (menu && menu.image) {
                this.imageLoader.preload(menu.image);
            }
            if (menu && menu.sponsorData) {
                if (menu.sponsorData.mapImage) {
                    this.imageLoader.preload(menu.sponsorData.mapImage);
                }
                if (menu.sponsorData.image1) {
                    this.imageLoader.preload(menu.sponsorData.image1);
                }
                if (menu.sponsorData.image2) {
                    this.imageLoader.preload(menu.sponsorData.image2);
                }
                if (menu.sponsorData.image3) {
                    this.imageLoader.preload(menu.sponsorData.image3);
                }
            }
        }
    };
    FindInApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_image_loader__["a" /* ImageLoader */],
            __WEBPACK_IMPORTED_MODULE_5__network_service__["a" /* NetworkService */]])
    ], FindInApi);
    return FindInApi;
}());

//# sourceMappingURL=findin-api-service.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard__ = __webpack_require__(346);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events_events__ = __webpack_require__(347);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__events_events__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_detail__ = __webpack_require__(602);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__events_detail__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history_history__ = __webpack_require__(603);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__history_history__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__meteo_meteo__ = __webpack_require__(604);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_4__meteo_meteo__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(605);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_5__settings_settings__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__introduction_introduction__ = __webpack_require__(606);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__introduction_introduction__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__beaches_beaches__ = __webpack_require__(607);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__beaches_beaches__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__beaches_detail__ = __webpack_require__(608);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_8__beaches_detail__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__places_places__ = __webpack_require__(609);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_9__places_places__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__places_detail__ = __webpack_require__(610);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_10__places_detail__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_services__ = __webpack_require__(611);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_11__services_services__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_detail__ = __webpack_require__(612);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_12__services_detail__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_service_list__ = __webpack_require__(613);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_13__services_service_list__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_sub_services__ = __webpack_require__(614);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_14__services_sub_services__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_utility_detail__ = __webpack_require__(615);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_15__services_utility_detail__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__others_privacy__ = __webpack_require__(616);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_16__others_privacy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__others_offers__ = __webpack_require__(617);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_17__others_offers__["a"]; });
// Single pages







// All beach tab pages


// All places tab pages


// All service pages





//Other pages


//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        get: function () {
            return this._state = this._clone(this._state);
        },
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        console.log("In global set:" + value);
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        return JSON.parse(JSON.stringify(object));
    };
    AppState = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AppState);
    return AppState;
}());

//# sourceMappingURL=app.global.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventDetailPage = (function () {
    function EventDetailPage(findInApi, nav, navParams, loader) {
        this.findInApi = findInApi;
        this.nav = nav;
        this.navParams = navParams;
        this.loader = loader;
        this.event = navParams.data;
    }
    EventDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'evennt-detail',template:/*ion-inline-start:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\events\detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{ event.title }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="background-image: url(\'assets/images/bg-black.jpg\'); color: white">\n\n  <ion-card>\n\n     <img-loader [src]="event.image" useImg></img-loader>\n\n    <ion-card-content>\n\n      <ion-card-title style="padding:0">\n\n         {{event.title}}\n\n      </ion-card-title>\n\n      \n\n      <p style="font-style: italic;"> {{ event.startDate | date : \'dd-MM\' }}</p>\n\n      <p style="margin-bottom:20px; font-style: italic;" *ngIf=event.startTime> h. {{event.startTime}} - {{event.location}} </p>\n\n      <p style="margin-bottom:20px; font-style: italic;" *ngIf="event.startTime==null">{{event.location}} </p>\n\n       <div  [innerHTML]="event.description"></div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer></ion-footer>'/*ion-inline-end:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\events\detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_shared__["a" /* FindInApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], EventDetailPage);
    return EventDetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryPage = (function () {
    function HistoryPage(findInApi, nav, loader) {
        this.findInApi = findInApi;
        this.nav = nav;
        this.loader = loader;
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loader.create({
            content: 'Loading ...'
        });
        loader.present().then(function () {
            _this.findInApi.getHistories().subscribe(function (data) {
                _this.histories = data;
                loader.dismiss();
            });
        });
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'history',template:/*ion-inline-start:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\history\history.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{\'HISTORY\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background-image: url(\'assets/images/bg-black.jpg\'); color: white">\n  <ion-card *ngFor="let h of histories | orderBy: \'created\' : false">\n     <img-loader [src]="h.image" useImg></img-loader>\n     <span  *ngIf="h.imageCaption" class="caption">{{h.imageCaption}}</span>\n    <ion-card-content *ngIf="h.title || h.description">\n      <ion-card-title>\n         {{h.title}}\n      </ion-card-title>\n       <div [innerHTML]="h.description"></div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<ion-footer></ion-footer>'/*ion-inline-end:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\history\history.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_shared__["a" /* FindInApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeteoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__meteo_modal_meteo_modal__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MeteoPage = (function () {
    function MeteoPage(findInApi, nav, loader, modalCtrl, http) {
        this.findInApi = findInApi;
        this.nav = nav;
        this.loader = loader;
        this.modalCtrl = modalCtrl;
        this.http = http;
    }
    MeteoPage.prototype.ngOnInit = function () {
        this.day = '0';
    };
    MeteoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loader.create({
            content: 'Loading ...'
        });
        loader.present().then(function () {
            //
            _this.http.get('http://editor.appturistiche.it:3033/previsioni3_777.json').map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.meteos = data;
                console.log(_this.meteos);
                loader.dismiss();
            });
            //
        });
    };
    MeteoPage.prototype.segmentChanged = function (ev) {
        console.log('Cambiato segmento:', ev.value);
        this.day = ev.value;
    };
    MeteoPage.prototype.caricaSpiagge = function (direzione) {
        console.log('Direzione:' + direzione);
    };
    MeteoPage.prototype.openModal = function (tempo) {
        var _this = this;
        console.log(tempo);
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__meteo_modal_meteo_modal__["a" /* MeteoModalPage */], { tempo: tempo });
        profileModal.onDidDismiss(function (data) {
            console.log(data);
            _this.modalDismissData = JSON.stringify(data);
        });
        profileModal.present();
    };
    MeteoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'meteo',template:/*ion-inline-start:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\meteo\meteo.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{\'METEO\' | translate}}</ion-title>\n  </ion-navbar>\n   <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="day" (ionChange)="segmentChanged($event)">\n      <ion-segment-button value="0" checked>\n        {{\'OGGI\' | translate}}\n      </ion-segment-button>\n      <ion-segment-button value="1">\n        {{\'DOMANI\' | translate}}\n      </ion-segment-button>\n      <ion-segment-button value="2">\n        {{\'DOPODOMANI\' | translate}}\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n  \n<ion-content style="background-image: url(\'assets/images/bg-black.jpg\'); color: white">\n<ion-card *ngFor="let m of meteos | tregiorni: day">\n<ion-item>\n   \n        <ion-avatar item-end>\n      <img src="{{m.tempo}}">\n    </ion-avatar>\n     <h2>\n      {{m.ora | translate}}\n    </h2>\n    <p style="color: gray">{{m.tempo_alt | translate}}</p>\n  </ion-item>\n\n  <ion-card-content style="background-color: white;">\n    <ion-row>\n    <ion-col>\n    <span style="color: gray">Temp.<br>{{m.temp}}°C</span>\n  </ion-col>\n  <ion-col>\n    <span style="color: gray">{{\'UMID\' | translate}}<br>{{m.umid}}%</span>\n  </ion-col>\n<ion-col *ngIf="m.windmagn <= 39">\n    <span *ngIf="m.windpath==\'Calma di vento\'" style="color: green">{{\'CALMA_DI_VENTO\' | translate}}</span>\n    <span *ngIf="m.windpath!=\'Calma di vento\'" style="color: gray">{{\'VENTO\' | translate}}<br>{{m.windmagn}} km/h</span>\n  </ion-col>\n  <ion-col *ngIf="m.windmagn > 39">\n    <span style="color: red">{{\'VENTO\' | translate}}<br>{{m.windmagn}} km/h</span>\n  </ion-col>\n    <ion-col *ngIf="m.windpath!=\'Calma di vento\'">\n    <img height="50px" src="./assets/images/winds/{{m.windpath}}.svg">\n  </ion-col>\n  <ion-col *ngIf="m.windstrong <= 39">\n    <span *ngIf="m.windpath==\'Calma di vento\'" style="color: green">{{\'CALMA_DI_VENTO\' | translate}}</span>\n    <span *ngIf="m.windpath!=\'Calma di vento\'" style="color: gray">{{\'RAFFICHE\' | translate}}<br>{{m.windstrong}} km/h</span>\n  </ion-col>\n  <ion-col *ngIf="m.windstrong > 39">\n    <span style="color: red">{{\'RAFFICHE\' | translate}}<br>{{m.windstrong}} km/h</span>\n  </ion-col>\n</ion-row>\n  </ion-card-content>\n  <ion-row style="background-color: white;">\n    <ion-col *ngIf="m.windpath!=\'Calma di vento\'">\n      <button ion-button icon-start clear small (click)="openModal(m)">\n        <ion-icon name="information-circle"></ion-icon>{{\'SPIAGGE_RIPARATE\' | translate}}\n      </button>\n    </ion-col>     \n        <ion-col *ngIf="m.windpath==\'Calma di vento\'">\n      <p>&nbsp;</p>\n    </ion-col>   \n  </ion-row>\n</ion-card>\n\n <ion-note>Informazioni elaborate dal Servizio Meteorologico dell’Aeronautica Militare e pubblicate sul sito www.meteoam.it</ion-note>\n</ion-content>\n<ion-footer></ion-footer>'/*ion-inline-end:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\meteo\meteo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shared_shared__["a" /* FindInApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], MeteoPage);
    return MeteoPage;
}());

//# sourceMappingURL=meteo.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_global__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsPage = (function () {
    function SettingsPage(translateService, global, storage) {
        this.translateService = translateService;
        this.global = global;
        this.storage = storage;
        this.currentLanguage = translateService.currentLang || 'it';
        this.currentTheme = global.get('theme');
    }
    // Translate to italian language
    SettingsPage.prototype.translateToItalian = function () {
        this.translateService.use('it');
        this.storage.set('lang', 'it');
        this.global.set('lang', 'it');
    };
    // Translate to english language
    SettingsPage.prototype.translateToEnglish = function () {
        this.translateService.use('en');
        this.storage.set('lang', 'en');
        this.global.set('lang', 'en');
    };
    SettingsPage.prototype.changeTheme = function (theme) {
        this.global.set('theme', theme);
        this.storage.set('theme', theme);
        console.log("Tema:" + theme);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'settings',template:/*ion-inline-start:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\settings\settings.html"*/'<ion-header>\n  <ion-navbar>\n     <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{\'SETTINGS\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="main-menu" style="background-image: url(\'assets/images/bg-black.jpg\'); color: white">\n <ion-list radio-group [(ngModel)]="currentLanguage">\n  <ion-list-header>\n    {{\'LANGUAGE\' | translate }}\n  </ion-list-header>\n\n  <ion-item>\n    <ion-label>{{\'ITALIAN\' | translate }}</ion-label>\n    <ion-radio value="it" (click)="translateToItalian()"></ion-radio>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>{{\'ENGLISH\' | translate }}</ion-label>\n    <ion-radio  value="en" (click)="translateToEnglish()"></ion-radio>\n  </ion-item>\n  </ion-list>\n<ion-list radio-group [(ngModel)]="currentTheme">\n   <ion-list-header>\n    {{\'THEME\' | translate }}\n  </ion-list-header>\n\n  <ion-item>\n    <ion-label>{{\'THEME_DEFAULT\' | translate }}</ion-label>\n    <ion-radio value="theme-dark" (click)="changeTheme(\'theme-dark\')"></ion-radio>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>{{\'THEME_LIGHT\' | translate }}</ion-label>\n    <ion-radio  value="theme-light" (click)="changeTheme(\'theme-light\')"></ion-radio>\n  </ion-item>\n\n\n\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppState */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroductionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntroductionPage = (function () {
    function IntroductionPage(findInApi, nav, loader) {
        this.findInApi = findInApi;
        this.nav = nav;
        this.loader = loader;
    }
    IntroductionPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loader.create({
            content: 'Loading ...'
        });
        loader.present().then(function () {
            _this.findInApi.getIntroductions().subscribe(function (data) {
                _this.introductions = data;
                loader.dismiss();
            });
        });
    };
    IntroductionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'introduction',template:/*ion-inline-start:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\introduction\introduction.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{\'INTRODUCTION\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="background-image: url(\'assets/images/bg-black.jpg\'); color: white">\n\n  <ion-card *ngFor="let h of introductions | orderBy: \'created\' : false">\n\n     <img-loader [src]="h.image" useImg></img-loader>\n\n     <span  *ngIf="h.imageCaption" class="caption">{{h.imageCaption}}</span>\n\n    <ion-card-content *ngIf="h.title || h.description">\n\n      <ion-card-title>\n\n         {{h.title}}\n\n      </ion-card-title>\n\n       <div [innerHTML]="h.description"></div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer></ion-footer>'/*ion-inline-end:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\introduction\introduction.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_shared__["a" /* FindInApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], IntroductionPage);
    return IntroductionPage;
}());

//# sourceMappingURL=introduction.js.map

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeachesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeachesPage = (function () {
    function BeachesPage(nav) {
        this.nav = nav;
        this.subMenus = [
            { title: 'LA_MADDALENA', component: __WEBPACK_IMPORTED_MODULE_2__pages__["a" /* BeachDetailPage */], image: 'assets/images/la_maddalena.png' },
            { title: 'CAPRERA', component: __WEBPACK_IMPORTED_MODULE_2__pages__["a" /* BeachDetailPage */], image: 'assets/images/caprera.png' },
            { title: 'PORTO_MADONNA', component: __WEBPACK_IMPORTED_MODULE_2__pages__["a" /* BeachDetailPage */], image: 'assets/images/porto_madonna.png' },
            { title: 'SPARGI', component: __WEBPACK_IMPORTED_MODULE_2__pages__["a" /* BeachDetailPage */], image: 'assets/images/spargi.png' },
        ];
    }
    BeachesPage.prototype.openPage = function (page) {
        this.nav.push(page.component, page.title);
    };
    BeachesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'beaches',template:/*ion-inline-start:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\beaches\beaches.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'BEACHES\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-image: url(\'assets/images/bg-black.jpg\'); color: white" class="main-menu">\n  <ion-list>\n    <button ion-item *ngFor="let p of subMenus" (click)="openPage(p)">\n        <ion-avatar item-left>\n          <img-loader [src]="p.image" useImg></img-loader>\n         </ion-avatar>\n        <h2>{{p.title | translate | uppercase }}</h2>\n      </button>\n  </ion-list>\n</ion-content>\n<ion-footer></ion-footer>'/*ion-inline-end:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\beaches\beaches.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], BeachesPage);
    return BeachesPage;
}());

//# sourceMappingURL=beaches.js.map

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeachDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BeachDetailPage = (function () {
    function BeachDetailPage(findInApi, nav, navParams, loader) {
        this.findInApi = findInApi;
        this.nav = nav;
        this.navParams = navParams;
        this.loader = loader;
        this.title = navParams.data;
    }
    BeachDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loader.create({
            content: 'Loading ...'
        });
        loader.present().then(function () {
            _this.findInApi.getBeaches(_this.navParams.data).subscribe(function (data) {
                _this.list = data;
                loader.dismiss();
            });
        });
    };
    BeachDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'beach-detail',template:/*ion-inline-start:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\beaches\detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{ title | translate }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="background-image: url(\'assets/images/bg-black.jpg\'); color: white">\n\n  <ion-card *ngFor="let h of list | orderBy: \'created\' : false">\n\n     <img-loader [src]="h.image" useImg></img-loader>\n\n      <span  *ngIf="h.imageCaption" class="caption">{{h.imageCaption}}</span>\n\n    <ion-card-content *ngIf="h.title || h.description">\n\n      <ion-card-title >\n\n         {{h.title}}\n\n      </ion-card-title>\n\n       <div [innerHTML]="h.description"></div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer></ion-footer>'/*ion-inline-end:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\beaches\detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_shared__["a" /* FindInApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], BeachDetailPage);
    return BeachDetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlacesPage = (function () {
    function PlacesPage(nav) {
        this.nav = nav;
        this.subMenus = [
            { title: 'MUSEUMS', component: __WEBPACK_IMPORTED_MODULE_2__pages__["k" /* PlaceDetailPage */], image: 'assets/images/museums.png' },
            { title: 'FOOT_PATHS', component: __WEBPACK_IMPORTED_MODULE_2__pages__["k" /* PlaceDetailPage */], image: 'assets/images/foot_paths.png' },
            { title: 'HIGHLIGHTS', component: __WEBPACK_IMPORTED_MODULE_2__pages__["k" /* PlaceDetailPage */], image: 'assets/images/highlights.png' },
            { title: 'FORTIFICATIONS', component: __WEBPACK_IMPORTED_MODULE_2__pages__["k" /* PlaceDetailPage */], image: 'assets/images/historical_places.png' }
        ];
    }
    PlacesPage.prototype.openPage = function (page) {
        this.nav.push(page.component, page.title);
    };
    PlacesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'places',template:/*ion-inline-start:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\places\places.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'PLACES\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-image: url(\'assets/images/bg-black.jpg\'); color: white" class="main-menu">\n  <ion-list>\n    <button ion-item *ngFor="let p of subMenus" (click)="openPage(p)">\n        <ion-avatar item-left>\n          <img-loader [src]="p.image" useImg></img-loader>\n        </ion-avatar>\n        <h2>{{p.title | translate | uppercase }}</h2>\n      </button>\n  </ion-list>\n</ion-content>\n<ion-footer></ion-footer>'/*ion-inline-end:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\places\places.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], PlacesPage);
    return PlacesPage;
}());

//# sourceMappingURL=places.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlaceDetailPage = (function () {
    function PlaceDetailPage(findInApi, nav, navParams, loader) {
        this.findInApi = findInApi;
        this.nav = nav;
        this.navParams = navParams;
        this.loader = loader;
        this.title = navParams.data;
    }
    PlaceDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loader.create({
            content: 'Loading ...'
        });
        loader.present().then(function () {
            _this.findInApi.getPlaces(_this.navParams.data).subscribe(function (data) {
                _this.list = data;
                loader.dismiss();
            });
        });
    };
    PlaceDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'place-detail',template:/*ion-inline-start:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\places\detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{ title | translate }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="background-image: url(\'assets/images/bg-black.jpg\'); color: white">\n\n  <ion-card *ngFor="let h of list | orderBy: \'created\' : false">\n\n     <img-loader [src]="h.image" useImg></img-loader>\n\n     <span  *ngIf="h.imageCaption" class="caption">{{h.imageCaption}}</span>\n\n    <ion-card-content *ngIf="h.title || h.description">\n\n      <ion-card-title>\n\n         {{h.title}}\n\n      </ion-card-title>\n\n       <div [innerHTML]="h.description"></div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer></ion-footer>'/*ion-inline-end:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\places\detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_shared__["a" /* FindInApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], PlaceDetailPage);
    return PlaceDetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServicesPage = (function () {
    function ServicesPage(nav) {
        this.nav = nav;
        this.subMenus = [
            { title: 'FOOD_DRINK', component: __WEBPACK_IMPORTED_MODULE_2__pages__["q" /* SubServicesPage */], image: 'assets/images/easy_food.png' },
            { title: 'SLEEP', component: __WEBPACK_IMPORTED_MODULE_2__pages__["n" /* ServiceListPage */], image: 'assets/images/sleep.png' },
            { title: 'SHOP', component: __WEBPACK_IMPORTED_MODULE_2__pages__["n" /* ServiceListPage */], image: 'assets/images/shops.png' },
            //{ title: 'STREET_MARKET', component: ServiceListPage, image : 'assets/images/mercati.png' },
            { title: 'BOATING', component: __WEBPACK_IMPORTED_MODULE_2__pages__["n" /* ServiceListPage */], image: 'assets/images/boating.png' },
            { title: 'RENTAL', component: __WEBPACK_IMPORTED_MODULE_2__pages__["n" /* ServiceListPage */], image: 'assets/images/rentals.png' },
            { title: 'SPORT_TRIP', component: __WEBPACK_IMPORTED_MODULE_2__pages__["n" /* ServiceListPage */], image: 'assets/images/sport_trips.png' },
            { title: 'PROFESSIONAL', component: __WEBPACK_IMPORTED_MODULE_2__pages__["n" /* ServiceListPage */], image: 'assets/images/professionals.png' }
        ];
    }
    ServicesPage.prototype.openPage = function (page) {
        this.nav.push(page.component, page.title);
    };
    ServicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'services',template:/*ion-inline-start:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\services\services.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'SERVICES\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-image: url(\'assets/images/bg-black.jpg\'); color: white" class="main-menu">\n  <ion-list>\n    <button ion-item *ngFor="let p of subMenus" (click)="openPage(p)">\n        <ion-avatar item-left>\n          <img [src]="p.image" />\n        </ion-avatar>\n        <h2>{{p.title | translate | uppercase }}</h2>\n      </button>\n  </ion-list>\n</ion-content>\n<ion-footer></ion-footer>'/*ion-inline-end:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\services\services.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], ServicesPage);
    return ServicesPage;
}());

//# sourceMappingURL=services.js.map

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_modal_map_modal__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet_locatecontrol__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet_locatecontrol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_leaflet_locatecontrol__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ServiceDetailPage = (function () {
    function ServiceDetailPage(findInApi, nav, navParams, network, alertCtrl, loader, modalCtrl) {
        var _this = this;
        this.findInApi = findInApi;
        this.nav = nav;
        this.navParams = navParams;
        this.network = network;
        this.alertCtrl = alertCtrl;
        this.loader = loader;
        this.modalCtrl = modalCtrl;
        this.showMapImage = true;
        this.sponsor = navParams.data;
        this.showMapImage = network.NoConnection();
        // GET ALL Menus as soon as internet is back
        network.OnConnected().subscribe(function () {
            _this.showMapImage = false;
        });
        network.OnDisConnected().subscribe(function () {
            _this.showMapImage = true;
        });
    }
    ServiceDetailPage.prototype.ionViewDidLoad = function () {
    };
    ServiceDetailPage.prototype.call = function (number) {
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
    };
    ServiceDetailPage.prototype.mailto = function (email) {
        window.open("mailto:" + email, "_system");
    };
    ServiceDetailPage.prototype.showMap = function (geo) {
        this.map = __WEBPACK_IMPORTED_MODULE_4_leaflet__["map"]("map", {
            maxZoom: 18,
            minZoom: 12,
            maxBounds: [
                //SUD OVEST
                [41.1771, 9.3535],
                //NORD EST
                [41.2719, 9.4932]
            ],
            zoomControl: true
        }).setView([geo.lat, geo.long], 14);
        __WEBPACK_IMPORTED_MODULE_4_leaflet__["tileLayer"]('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy OpenStreetMap Contributors, ' +
                'CC-BY-SA, ' +
                'Imagery ©'
        }).addTo(this.map);
        this.showMarkers(geo);
        __WEBPACK_IMPORTED_MODULE_4_leaflet__["control"].locate({
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
    };
    ServiceDetailPage.prototype.showMarkers = function (geo) {
        __WEBPACK_IMPORTED_MODULE_4_leaflet__["marker"]([geo.lat, geo.long]).addTo(this.map);
    };
    ServiceDetailPage.prototype.openMapModal = function (title, geo) {
        var _this = this;
        console.log(title);
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__map_modal_map_modal__["a" /* MapModalPage */], { title: title, geo: geo });
        profileModal.onDidDismiss(function (data) {
            console.log(data);
            _this.modalDismissData = JSON.stringify(data);
        });
        profileModal.present();
    };
    ServiceDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'service-detail',template:/*ion-inline-start:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\services\detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{ sponsor.title }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="background-image: url(\'assets/images/bg-black.jpg\'); color: white">\n\n<!-- Sponsor Premium : visualizzo slides, slogan e descrizione -->\n\n  <ion-card *ngIf="sponsor.sponsorData && sponsor.sponsorData.isPremium">\n\n   <ion-slides [pager]="true" [autoplay]="3000" [effect]="fade">\n\n      <ion-slide *ngIf="sponsor.sponsorData.image1">\n\n       <img-loader src={{sponsor.sponsorData.image1}} useImg></img-loader> \n\n      </ion-slide>\n\n      <ion-slide *ngIf="sponsor.sponsorData.image2">\n\n       <img-loader src={{sponsor.sponsorData.image2}} useImg></img-loader> \n\n      </ion-slide>\n\n      <ion-slide *ngIf="sponsor.sponsorData.image3">\n\n       <img-loader src={{sponsor.sponsorData.image3}} useImg></img-loader> \n\n      </ion-slide>\n\n    </ion-slides> <ion-card-content *ngIf="sponsor.sponsorData">\n\n\n\n   <!-- <ion-card-title style="color: yellow" *ngIf="sponsor.sponsorData"> -->\n\n    <ion-card-title style="color: #07AAF6" *ngIf="sponsor.sponsorData">\n\n      {{ sponsor.sponsorData.slogan}}      \n\n      </ion-card-title>\n\n    <p class="acapo">{{sponsor.description}}</p>\n\n    <img-loader *ngIf="showMapImage && sponsor.sponsorData" src={{sponsor.sponsorData.mapImage}} useImg></img-loader> \n\n\n\n  </ion-card-content>\n\n  </ion-card>\n\n  <!-- Fine sponsor premium> -->\n\n\n\n  <!-- Sponsor semplice : visualizzo solo banner -->\n\n  <ion-card *ngIf="!sponsor.sponsorData.isPremium">\n\n      <img-loader src={{sponsor.image}} useImg></img-loader>\n\n  </ion-card>\n\n  <!-- Fine sponsor semplice -->\n\n\n\n   <ion-grid style="background-color: rgba(250,250,255,0.95)">\n\n    <ion-row>\n\n      <ion-col align="center" *ngIf="sponsor.sponsorData.phone1"><img src="assets/images/call-on.svg" style="width : 50px ; height : auto" (click)="call(sponsor.sponsorData.phone1)" ></ion-col>\n\n   \n\n      <ion-col align="center" *ngIf="sponsor.sponsorData.phone2"><img src="assets/images/call-on.svg" style="width : 50px ; height : auto" (click)="call(sponsor.sponsorData.phone2)" ></ion-col>\n\n      \n\n      <ion-col align="center" *ngIf="sponsor.sponsorData.geo"><img src="assets/images/marker-on.svg" style="width : 50px ; height : auto" (click)="openMapModal(sponsor.title,sponsor.sponsorData.geo);" ></ion-col>\n\n      \n\n      <ion-col align="center" *ngIf="sponsor.sponsorData.email"><img src="assets/images/mail-on.svg" style="width : 50px ; height : auto" (click)="mailto(sponsor.sponsorData.email)" ></ion-col>\n\n      \n\n  </ion-row>\n\n  </ion-grid>\n\n  <div id="mapImage"><img-loader [src]="sponsor.sponsorData.mapImage" useImg></img-loader></div>\n\n\n\n    <ion-row></ion-row>\n\n  <!---<div style="height:400px" id="map"></div> -->\n\n \n\n</ion-content>\n\n<ion-footer></ion-footer>'/*ion-inline-end:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\services\detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_shared__["a" /* FindInApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared__["b" /* NetworkService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], ServiceDetailPage);
    return ServiceDetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ServiceListPage = (function () {
    function ServiceListPage(findInApi, nav, navParams, loader) {
        this.findInApi = findInApi;
        this.nav = nav;
        this.navParams = navParams;
        this.loader = loader;
        this.title = navParams.data;
    }
    ServiceListPage.prototype.openPage = function (data) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__pages__["m" /* ServiceDetailPage */], data);
    };
    ServiceListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loader.create({
            content: 'Loading ...'
        });
        loader.present().then(function () {
            _this.findInApi.getSponsors(_this.navParams.data).subscribe(function (data) {
                _this.sponsors = data;
                loader.dismiss();
            });
        });
    };
    ServiceListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'service-list',template:/*ion-inline-start:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\services\service-list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{ title | translate }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="background-image: url(\'assets/images/bg-black.jpg\'); color: white">\n\n  <ion-card *ngFor="let h of sponsors | orderBy: \'created\' : false" (click)="openPage(h)">\n\n     <img-loader [src]="h.image" useImg></img-loader>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer></ion-footer>'/*ion-inline-end:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\services\service-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_shared__["a" /* FindInApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ServiceListPage);
    return ServiceListPage;
}());

//# sourceMappingURL=service-list.js.map

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubServicesPage = (function () {
    function SubServicesPage(nav, navParams) {
        this.nav = nav;
        this.navParams = navParams;
        this.title = navParams.data;
        this.intitializeSubMenus();
    }
    SubServicesPage.prototype.openPage = function (page) {
        this.nav.push(page.component, page.title);
    };
    SubServicesPage.prototype.intitializeSubMenus = function () {
        if (this.title === "UTILITY") {
            this.subMenus = [
                { title: 'NUMBER', component: __WEBPACK_IMPORTED_MODULE_2__pages__["r" /* UtilityDetailPage */], image: 'assets/images/red_cross.png' },
                { title: 'PHARMACY', component: __WEBPACK_IMPORTED_MODULE_2__pages__["r" /* UtilityDetailPage */], image: 'assets/images/pharmacies.png' },
                { title: 'TRANSPORT', component: __WEBPACK_IMPORTED_MODULE_2__pages__["r" /* UtilityDetailPage */], image: 'assets/images/transports.png' },
                { title: 'GARBAGE', component: __WEBPACK_IMPORTED_MODULE_2__pages__["r" /* UtilityDetailPage */], image: 'assets/images/garbage.png' },
                { title: 'BANCOMAT', component: __WEBPACK_IMPORTED_MODULE_2__pages__["r" /* UtilityDetailPage */], image: 'assets/images/bancomat.png' }
            ];
        }
        else if (this.title === "FOOD_DRINK") {
            this.subMenus = [
                { title: 'RESTAURANT', component: __WEBPACK_IMPORTED_MODULE_2__pages__["n" /* ServiceListPage */], image: 'assets/images/food_drinks.png' },
                { title: 'PIZZA', component: __WEBPACK_IMPORTED_MODULE_2__pages__["n" /* ServiceListPage */], image: 'assets/images/pizza.png' },
                { title: 'EASY_FOOD', component: __WEBPACK_IMPORTED_MODULE_2__pages__["n" /* ServiceListPage */], image: 'assets/images/easy_food.png' }
            ];
        }
    };
    SubServicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sub-services',template:/*ion-inline-start:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\services\sub-services.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n   <ion-title>{{ title | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-image: url(\'assets/images/bg-black.jpg\'); color: white" class="main-menu">\n  <ion-list>\n    <button ion-item *ngFor="let p of subMenus" (click)="openPage(p)">\n        <ion-avatar item-left>\n          <img [src]="p.image" />\n        </ion-avatar>\n        <h2>{{p.title | translate | uppercase }}</h2>\n      </button>\n  </ion-list>\n</ion-content>\n<ion-footer></ion-footer>'/*ion-inline-end:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\services\sub-services.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SubServicesPage);
    return SubServicesPage;
}());

//# sourceMappingURL=sub-services.js.map

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet_locatecontrol__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet_locatecontrol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_leaflet_locatecontrol__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UtilityDetailPage = (function () {
    function UtilityDetailPage(findInApi, nav, navParams, modalCtrl, loader) {
        this.findInApi = findInApi;
        this.nav = nav;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loader = loader;
        this.title = navParams.data;
    }
    UtilityDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loader.create({
            content: 'Loading ...'
        });
        loader.present().then(function () {
            _this.findInApi.getUtilities(_this.navParams.data).subscribe(function (data) {
                _this.sponsors = data;
                if (_this.navParams.data === "TRANSPORT") {
                    _this.findInApi.getAllTaxies().subscribe(function (data) {
                        _this.taxies = data;
                        _this.ferries = _this.sponsors.filter(function (s) { return s.subType === 'ferries'; });
                        _this.urbanoes = _this.sponsors.filter(function (s) { return s.subType === 'urbano'; });
                        _this.extraUrbanoes = _this.sponsors.filter(function (s) { return s.subType === 'extra_urbano'; });
                        _this.trains = _this.sponsors.filter(function (s) { return s.subType === 'trains'; });
                        loader.dismiss();
                    });
                }
                else {
                    if (_this.navParams.data === "BANCOMAT") {
                        var bmIcon = __WEBPACK_IMPORTED_MODULE_3_leaflet__["icon"]({
                            iconUrl: 'assets/leaflet/images/bmat-icon.png',
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                            popupAnchor: [-3, -42],
                            shadowUrl: 'assets/leaflet/images/marker-shadow.png',
                            shadowSize: [41, 41],
                            shadowAnchor: [12, 41]
                        });
                        setTimeout(function () {
                            _this.map = __WEBPACK_IMPORTED_MODULE_3_leaflet__["map"]("map", {
                                maxZoom: 18,
                                minZoom: 12,
                                maxBounds: [
                                    //SUD OVEST
                                    [41.1771, 9.3535],
                                    //NORD EST
                                    [41.2719, 9.4932]
                                ],
                                zoomControl: true
                            }).setView([41.2126, 9.4070], 16);
                            __WEBPACK_IMPORTED_MODULE_3_leaflet__["tileLayer"]('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                                attribution: 'Map data &copy OpenStreetMap Contributors, ' +
                                    'CC-BY-SA, ' +
                                    'Imagery ©'
                            }).addTo(_this.map);
                            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                                var entry = data_1[_i];
                                console.log(entry.description + '-' + entry.imageCaption);
                                __WEBPACK_IMPORTED_MODULE_3_leaflet__["marker"]([entry.description, entry.imageCaption], { icon: bmIcon }).addTo(_this.map).
                                    bindPopup(entry.title);
                            }
                            //Inizio localizzazione
                            __WEBPACK_IMPORTED_MODULE_3_leaflet__["control"].locate({
                                locateOptions: {
                                    enableHighAccuracy: true //Abilita max accuratezza via comb. GPS/PROVIDER
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
                            }).addTo(_this.map);
                            //Fine localizzazione
                        });
                    }
                    loader.dismiss();
                }
            });
        });
    };
    UtilityDetailPage.prototype.call = function (number) {
        if (!number)
            return;
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
    };
    UtilityDetailPage.prototype.openPage = function (page) {
        this.nav.push(page.component, page.title);
    };
    UtilityDetailPage.prototype.goToMap = function (b) {
        this.content.scrollToTop();
        var bmIcon = __WEBPACK_IMPORTED_MODULE_3_leaflet__["icon"]({
            iconUrl: 'assets/leaflet/images/bmat-icon.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [-3, -42],
            shadowUrl: 'assets/leaflet/images/marker-shadow.png',
            shadowSize: [41, 41],
            shadowAnchor: [12, 41]
        });
        this.map.panTo([b.description, b.imageCaption]);
        __WEBPACK_IMPORTED_MODULE_3_leaflet__["marker"]([b.description, b.imageCaption], { icon: bmIcon }).addTo(this.map).
            bindPopup(b.title).openPopup();
        console.log("tapped");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], UtilityDetailPage.prototype, "content", void 0);
    UtilityDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'utility-detail',template:/*ion-inline-start:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\services\utility-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{ title | translate }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="background-image: url(\'assets/images/bg-black.jpg\'); color: white">\n\n  <div *ngIf="title ==\'NUMBER\'">\n\n    <ion-card *ngFor="let h of sponsors | orderBy: \'created\' : false">\n\n        <a (click)="call(h.description)">\n\n          <img-loader [src]="h.image" useImg></img-loader>\n\n        </a>\n\n    </ion-card>\n\n  </div>\n\n  <div *ngIf="title ==\'TRANSPORT\'">\n\n    \n\n    <div class="taxi-header"> TAXI </div>\n\n    <ion-card *ngFor="let h of taxies | orderBy: \'created\' : false" class="taxi">\n\n      <a (click)="call(h.sponsorData.phone1)">\n\n        <img-loader [src]="h.image" useImg></img-loader>\n\n      </a>\n\n    </ion-card>\n\n    <br>\n\n\n\n    <div class="ferries-header"> {{ \'FERRIES\' | translate | uppercase}} </div>\n\n    <ion-card *ngFor="let h of ferries | orderBy: \'created\' : false" class="taxi">\n\n      <a (click)="call(h.transportData.transportPhone)">\n\n        <img-loader [src]="h.image" useImg></img-loader>\n\n      </a>\n\n      <span  *ngIf="h.imageCaption" class="caption">{{h.imageCaption}}</span>\n\n      <ion-card-content>\n\n        <p class="acapo" *ngIf="h.description">{{h.description}}</p>\n\n        <div *ngFor="let tt of h.transportData.timeTables" style="margin-top:5px">\n\n           <h4 class="ferries-route">{{tt.name}}</h4>\n\n           <p>{{tt.timings}}</p>\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <div class="urban-header"> {{ \'URBAN_T\' | translate | uppercase}} </div>\n\n    <ion-card *ngFor="let h of urbanoes | orderBy: \'created\' : false" class="taxi">\n\n      <a (click)="call(h.transportData.transportPhone)">\n\n        <img-loader [src]="h.image" useImg></img-loader>\n\n      </a>\n\n      <span  *ngIf="h.imageCaption" class="caption">{{h.imageCaption}}</span>\n\n      <ion-card-content>\n\n        <h3 class="transport-title" *ngIf="h.title">{{h.title | translate | uppercase }}</h3>\n\n        <p class="acapo" *ngIf="h.description">{{h.description}}</p>\n\n        <div *ngFor="let tt of h.transportData.timeTables" style="margin-top:5px">\n\n          <h4 class="h-routes">{{tt.name}}</h4>\n\n          <p class="p-timetable">{{tt.timings}}</p>\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <!-- <div class="urban-header"> {{ \'URBAN_EXTRA\' | translate | uppercase}} </div>\n\n    <ion-card *ngFor="let h of extraUrbanoes | orderBy: \'created\' : false" class="taxi">\n\n      <a (click)="call(h.transportData.transportPhone)">\n\n        <img-loader [src]="h.image" useImg></img-loader>\n\n      </a>\n\n      <span  *ngIf="h.imageCaption" class="caption">{{h.imageCaption}}</span>\n\n      <ion-card-content>\n\n        <p>{{h.description}}</p>\n\n        <div *ngFor="let tt of h.transportData.timeTables" style="margin-top:5px">\n\n           <h4>{{tt.name}}</h4>\n\n           <p>{{tt.timings}}</p>\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card> \n\n\n\n    <div class="train-header"> {{ \'TRAINS\' | translate | uppercase}} </div>\n\n    <ion-card *ngFor="let h of trains | orderBy: \'created\' : false" class="taxi">\n\n      <a (click)="call(h.transportData.transportPhone)">\n\n        <img-loader [src]="h.image" useImg></img-loader>\n\n      </a>\n\n      <span  *ngIf="h.imageCaption" class="caption">{{h.imageCaption}}</span>\n\n      <ion-card-content>\n\n        <p>{{h.description}}</p>\n\n        <div *ngFor="let tt of h.transportData.timeTables" style="margin-top:5px">\n\n           <h4>{{tt.name}}</h4>\n\n           <p>{{tt.timings}}</p>\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card> -->\n\n  </div>\n\n\n\n  <div *ngIf="title ==\'PHARMACY\'">\n\n   <div *ngFor="let h of sponsors | orderBy: \'created\' : false">\n\n        <ion-card class="taxi">\n\n            <img-loader [src]="h.image" useImg></img-loader>\n\n            <span  *ngIf="h.imageCaption" class="caption">{{h.imageCaption}}</span>\n\n          <div class="pharmacy-header"> {{h.title}} </div>\n\n          <ion-card-content>\n\n           <p class="acapo">{{h.description}}</p>\n\n            <ion-grid >\n\n              <ion-row class="pharmacy-row" wrap *ngFor="let od of h.pharmacyData.openingDates">\n\n                <ion-col width-33> {{ od.date }}</ion-col>\n\n                <ion-col width-77> {{od.name}}</ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n  </div>\n\n    \n\n  <div *ngIf="title ==\'GARBAGE\'">\n\n    <ion-card *ngFor="let h of sponsors">\n\n      <img-loader [src]="h.image" useImg></img-loader>\n\n      <span  *ngIf="h.imageCaption" class="caption">{{h.imageCaption}}</span>\n\n      <ion-card-content>\n\n        <ion-card-title>\n\n          {{h.title}}\n\n        </ion-card-title>\n\n        <div [innerHTML]="h.description"></div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n\n\n  <div *ngIf="title ==\'BANCOMAT\'">\n\n    <ion-card>\n\n      <div style="height:400px; width:100%;" id="map"></div>\n\n    </ion-card> \n\n    <!--<div id="map-container" style="position: absolute; top: 0px; bottom: 20px;width: 100%; height: 50%;">\n\n    \n\n    <div style="height:100%; width:100%;" id="map"></div>\n\n    </div> -->\n\n    <ion-card *ngFor="let b of sponsors | orderBy: \'created\' : false">\n\n        <a (click)="goToMap(b)">\n\n          <img-loader [src]="b.image" useImg></img-loader>\n\n        </a>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>\n\n<ion-footer></ion-footer>'/*ion-inline-end:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\services\utility-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_shared__["a" /* FindInApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], UtilityDetailPage);
    return UtilityDetailPage;
}());

//# sourceMappingURL=utility-detail.js.map

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_global__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OtherPage = (function () {
    function OtherPage(global, menu) {
        this.global = global;
        this.menu = menu;
        this.currentTheme = global.get('theme');
        this.currentLang = global.get('lang');
    }
    OtherPage.prototype.callMenu = function () {
        this.menu.open();
    };
    OtherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'privacy',template:/*ion-inline-start:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\others\privacy.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{\'PRIVACY-NOTICE\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<!--<ion-content class="main-menu" padding>-->\n\n<ion-content class="main-menu privacy" padding>\n<div id="privacy_it" *ngIf="currentLang ==\'it\'">\n<div class="card">\nGentile Utente,<br>\ndesideriamo informarti, nel modo più comprensibile possibile, che l\'applicazione “La Maddalena Arcipelago” raccoglie automaticamente e tratta, nel rispetto del Regolamento Europeo 2006/679, i seguenti Tuoi dati personali e per le finalità che in seguito descriveremo<br>\n<ul>\n<li><a href="#tecnici">dati tecnici e di navigazione</a></li>\n<li><a href="#geolocal">dati di geolocalizzazione</a></li>\n<li><a href="#push">dato identificativo del device</a></li>\n</ul>\n</div>\n<div class="card" id="tecnici">DATI TECNICI E DI NAVIGAZIONE\n<br>\nI nostri sistemi informatici e le procedure software che garantiscono il funzionamento della App acquisiscono automaticamente, durante l’utilizzo, alcune informazioni la cui trasmissione è implicita nell’uso dei protocolli di comunicazione di Internet. <br>\nLe informazioni raccolte sono le seguenti:\n<ul>\n<li>l’indirizzo internet IP o il nome a dominio del dispositivo da Te utilizzato;</li>\n <li>gli indirizzi in notazione URI (Uniform Resource Identifier) delle risorse richieste;</li>\n <li>l’orario della richiesta;</li>\n <li>il metodo utilizzato nel sottoporre la richiesta al server;</li>\n <li>la dimensione del file ottenuto in risposta;</li>\n <li>il codice numerico indicante lo stato della risposta data dal server (buon fine, errore, ecc.);</li>\n <li>altri parametri relativi al sistema operativo e contesto informatico del Tuo dispositivo;</li>\n</ul>\nQueste informazioni non sono raccolte per essere associate a utenti identificati e vengono utilizzate al solo fine di ricavare informazioni anonime per controllare il corretto funzionamento della App. Tali informazioni sono detenute presso server cloud UE e vengono cancellate per sovrascrittura con frequenza settimanale. <br>\n</div>\n<br>\n<div class="card" id="geolocal">DATI DI GEOLOCALIZZAZIONE\n<br>\nSe hai attivato l‘utilizzo dei servizi di geolocalizzazione sul Tuo device (es. cellulare e/o tablet) e se hai acconsentito specificatamente all\'uso della geolocalizzazione nella nostra App, quando decidi di utilizzare il pulsante di geolocalizzazione la stessa App può acquisire dati relativi alla posizione geografica del Tuo device (es. cellulare e/o tablet) tramite GPS/Wifi/Segnale. <br>\nTali dati saranno utilizzati soltanto affinchè Tu possa individuare la tua posizione nella mappa in riferimento ai punti di interesse segnalati nell\'App e da te selezionati. <br>\nIn ogni momento potrai disattivare i servizi di geolocalizzazione accedendo all’apposita sezione del sistema operativo del tuo device. Tali dati non saranno diffusi o comunicati a terzi.\n</div>\n<br>\n<div class="card" id="push">DATO IDENTIFICATIVO DEL TUO DEVICE\n<br>\nAnche in questo caso, se hai acconsentito al ricevimento delle notifiche push, l\'App acquisirà automaticamente il dato identificativo del tuo device che verrà utilizzato soltanto per comunicarTi aggiornamenti e notizie importanti, tramite l\'uso delle notifiche push per mezzo delle piattaforme ufficiali di Apple e Google.<br>\nQuesta funzionalità, se non più gradita, potrà essere rimossa dalle impostazioni nell\'apposita sezione del sistema operativo del tuo device.\n</div>\n<br>\n<div class="card">CONCLUDENDO …\n<br>\nTi ricordiamo che hai diritto di avere queste informazioni, di chiedermi di cancellare i tuoi dati in nostro possesso, e addirittura di sporgere reclamo presso l’autorità se ritieni che noi stiamo violando i tuoi diritti.<br>\nPer ogni Tua richiesta in merito, sei pregato di inviarla all\'indirizzo email : supporto@appturistiche.it<br>\nGrazie per avere letto fino in fondo le spiegazioni su come utilizziamo i Tuoi dati.<br>\nIl Titolare del Trattamento - Sig. Antonio Getulio Barretta\n<br>\n</div>\n</div> <!-- End privacy IT -->\n<div id="privacy_en" *ngIf="currentLang ==\'en\'">\n<div class="card">\nDear User, <br>\nwe wish to inform you, in the most clear way possible, that the App "La Maddalena Arcipelago" automatically collects and treats, in compliance with the European Regulation 2006/679, the following personal data and for the purposes that we will describe below: <br>\n<ul>\n<li><a href="#tecnici">technical and navigation data</a></li>\n<li><a href="#geolocal">geolocation data</a></li>\n<li><a href="#push">identification data of the device</a></li>\n</ul>\n</div>\n<div class="card" id="tecnici">TECHNICAL AND NAVIGATION DATA\n<br>\nOur computer systems and software procedures that guarantee the functioning of the App automatically acquire, during use, some information whose transmission is implicit in the use of Internet communication protocols. <br>\nThe information collected is as follows:\n<ul>\n\n<li> the IP internet address or domain name of the device used by you; </li>\n <li> addresses in URI (Uniform Resource Identifier) ​​notation of the requested resources; </li>\n <li> the time of the request; </li>\n <li> the method used submitting the request to the server; </li>\n <li> the file size obtained in response; </li>\n <li> the numerical code indicating the status of the response given by the server (successful, error, etc.); </li>\n <li> other parameters relating to the operating system and IT context of your device; </li>\n</ul>\n\nThis information is not collected to be associated with identified users and is used for the sole purpose of obtaining anonymous information to check the correct functioning of the App. This information is held at EU cloud servers and is deleted by overwriting with weekly frequency. <br>\n</div>\n<br>\n<div class="card" id="geolocal">GEOLOCATION DATA\n<br>\nIf you have activated the use of geolocation services on your device (eg mobile and / or tablet) and if you have specifically consented to the use of geolocation in our App, when you decide to use the geolocation button then the App can acquire data relative to the geographical position of your device (eg mobile and / or tablet) via GPS / Wifi / Signal. <br>\nThese data will be used only to identify your position on the map in relation to the points of interest in the App and selected by you. <br>\nAt any time you can disable the geolocation services by accessing the appropriate section of the operating system of your device. These data will not be disclosed or communicated to third parties.\n</div>\n<br>\n<div class="card" id="push">IDENTIFICATION DATA OF THE DEVICE\n<br>\nAlso in this case, if you have consented to receive push notifications, the App will automatically acquire the identifying data of your device that will be used only to communicate updates and important news, through the use of push notifications via official Apple and Google platforms. <br>\nThis feature can be removed from the settings section of your device.\n</div>\n<br>\n<div class="card">CONCLUDING …\n<br>\nWe remind you that you have the right to have this information, to ask me to delete your data in our possession, and even to put a claim to the authority if you believe that we are violating your rights. <br>\nFor all your requests, please use this the email address: supporto@appturistiche.it <br>\nThank you for reading all the explanations on how we use your data\nThe Data Controller - Mr. Antonio Getulio Barretta\n<br>\n</div>\n</div> <!-- End privacy EN -->\n</ion-content>\n<ion-footer></ion-footer>'/*ion-inline-end:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\others\privacy.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppState */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], OtherPage);
    return OtherPage;
}());

//# sourceMappingURL=privacy.js.map

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_global__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OffersPage = (function () {
    function OffersPage(global, menu) {
        this.global = global;
        this.menu = menu;
        this.currentTheme = global.get('theme');
        this.currentLang = global.get('lang');
    }
    OffersPage.prototype.callMenu = function () {
        this.menu.open();
    };
    OffersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'offers',template:/*ion-inline-start:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\others\offers.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Yesconticino</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<!--<ion-content class="main-menu privacy" padding> -->\n\n<ion-content class="main-menu offers" padding>\n<img src="./assets/images/yesconticino_header.jpg">\n<div id="privacy_it" *ngIf="currentLang ==\'it\'">\n<div class="card"><br>\nQuest\'anno l\'App La Maddalena Arcipelago si fa promotrice di un piccolo (per ora) circuito di scontistica. Mostrando questa schermata dell\'App potrai richiedere il 10% di sconto su prodotti e servizi. Puoi identificare le attività che partecipano a Yesconticino grazie all\'icona della stella col 10%. Troverai l\'icona sullo spazio promozionale delle attività nella sezione servizi. Se l\'offerta riguarda solo alcuni prodotti una dicitura sotto l’icona lo specificherà. Le attività che la applicano senza restrizioni riporteranno la dicitura "yesconticino"<br>\n</div>\n<div class="card" id="regole"><br>Poche regole per richiedere lo sconto:<br>\n<ul style="list-style-image: url(\'./assets/images/yesconticino_bullet.png\');">\n<li>Yesconticino è applicabile solo su spese superiori ai € 10,00.</li>\n<li>Richiedi il tuo sconto prima della compilazione della ricevuta o meglio ancora prima di richiedere il servizio.</li>\n<li>Mostra questa schermata al momento della richiesta.</li>\n<li>Yesconticino non è cumulabile con altri sconti.</li>\n<li>Yesconticino è un piccolo atto di cortesia, richiedilo con cortesia ;-)</li>\n</ul>\n<br>\n</div>\n</div> <!-- End privacy IT -->\n<div id="privacy_en" *ngIf="currentLang ==\'en\'">\n<div class="card"><br>\nThe La Maddalena Arcipelago App promotes a small (for now) discount circuit. By showing this screen of the App you can request a 10% discount on products and services. You can identify the businnesses participating in Yesconticino by the 10% star icon. You will find the icon in the services section. If the offer is restricted to some products, a wording below the icon will specify it. Businnesses that apply it without restrictions will bear the only wording "yesconticino"<br>\n</div>\n<div class="card" id="regole-en"><br>Few rules to request the discount:<br>\n<ul style="list-style-image: url(\'./assets/images/yesconticino_bullet.png\');">\n<li>Yesconticino is applicable only on expenses over € 10.00.</li>\n<li>Request your discount before receipt or better before requesting the service.</li>\n<li>Show this screen when requesting.</li>\n<li>Yesconticino cannot be combined with other discounts.</li>\n<li>Yesconticino it\'s a little act of courtesy, ask for it politely ;-)</li>\n</ul>\n<br>\n</div>\n</div> <!-- End privacy EN -->\n<img src="./assets/images/yesconticino_footer.png">\n</ion-content>\n<ion-footer>\n	\n</ion-footer>'/*ion-inline-end:"E:\Develop\Mobile\IONIC\lamaddalena_v3\src\pages\others\offers.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_app_global__["a" /* AppState */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], OffersPage);
    return OffersPage;
}());

//# sourceMappingURL=offers.js.map

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_tregiorni_tregiorni__ = __webpack_require__(621);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__pipes_tregiorni_tregiorni__["a" /* TregiorniPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__pipes_tregiorni_tregiorni__["a" /* TregiorniPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TregiorniPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the TregiorniPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var TregiorniPipe = (function () {
    function TregiorniPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    TregiorniPipe.prototype.transform = function (values, day) {
        if (typeof values === 'undefined') {
            return values;
        }
        console.log(values);
        return values.filter(function (item) {
            return item['day'].includes(day);
        });
    };
    TregiorniPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'tregiorni',
        })
    ], TregiorniPipe);
    return TregiorniPipe;
}());

//# sourceMappingURL=tregiorni.js.map

/***/ })

},[287]);
//# sourceMappingURL=main.js.map