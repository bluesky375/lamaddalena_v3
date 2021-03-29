import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs';
import { Observable} from 'rxjs/Observable';
import { NetworkService } from './network-service';
import { TranslateService } from '@ngx-translate/core';
import { ImageLoader } from 'ionic-image-loader';

@Injectable()
export class FindInApi {
	
	private baseUrl = 'http://editor.appturistiche.it:3033/api/menus?appId=58e2b3ac28ec4e3c47f2d8e3';
	private _menusStorageKey : string = 'menusData';
	private _lastUpdatedDateKey : string = 'lastUpdatedDate';
	private _lang : string ='lang';

	private menus : any;	
	private meteos : any;
	private lastUpdatedDate : Date;	

	constructor(private http: Http, 
				private storage: Storage,
				private translateService: TranslateService,
				private imageLoader: ImageLoader,
				private network : NetworkService) {

		// Set menu items from local storage
		storage.get(this._menusStorageKey).then((val)=>{
			this.menus = val;
		});

		// Set last updated date
		storage.get(this._lastUpdatedDateKey).then((val)=>{
			this.lastUpdatedDate = val;
		});

		// Get and set current language
		storage.get(this._lang).then((val)=>{
			this.translateService.currentLang = val;
		});

		// GET ALL Menus as soon as internet is back
		network.OnConnected().subscribe(()=>{
       		this.getAllMenus('');
    	});
	}

	private getAllMenus(type: String, subType: String = null) : Observable<any> {
		var currentLanguage = this.translateService.currentLang || 'it';
		
		if (type == "event") {
			currentLanguage = 'it';
		} 
		
		// If no internet connection
		if(this.menus && this.menus.length > 0) {
			// Check if we have data in internal storage or not.
			// then return data from internal storage
				return new Observable(observer => {
					var filtered = this.menus.filter(function(m) {
						if(subType){
						    return (m.language === currentLanguage && m.type === type && m.subType == subType.toLowerCase());
						}else{
							return (m.language === currentLanguage && m.type === type);
						}
					}).sort(function(a,b) {
						return a.created > b.created;
					});

					observer.next(filtered);
					observer.complete();
				});
		}
		else{
			 return this.http.get(this.baseUrl)
					.map((response : Response) => {
						this.menus = response.json();
						this._downloadAllImages();
						this.storage.set(this._menusStorageKey, this.menus);
						var filtered = this.menus.filter(function(m){
							return m.type === type;
						}).sort(function(a,b) {
							return a.created > b.created;
						});

						return filtered;
					});
		}		
	}

	// Get All histories
	getHistories() : Observable<any> {
		return this.getAllMenus('history');
	}

	// GET All introductions
	getIntroductions() : Observable<any> {
		return this.getAllMenus('introduction');
	}

	// GET All Places
	getPlaces(type) : Observable<any> {
		return this.getAllMenus('place', type);
	}

	// GET All Beaches
	getBeaches(type) : Observable<any> {
		return this.getAllMenus('beach', type);
	}

	// GET All Beaches
	getSponsors(type) : Observable<any> {
		return this.getAllMenus('sponsor', type);
	}

	// GET All Beaches
	getUtilities(type) : Observable<any> {
		return this.getAllMenus(type.toLowerCase());
	}

	getAllTaxies() : Observable<any> {
		return this.getAllMenus('sponsor', 'taxi');
	}

	// GET All Beaches
	getAllEvents(type) : Observable<any> {
		return this.getAllMenus('event', type);
	}

	// Load ALL Data 
	loadAllData() : Observable<any> {
		return this.getAllMenus('');
	}

	getById(id) : Observable<any> {
      return new Observable(observer => {
			this.getSponsors(undefined).subscribe(data => {
			var list = data.filter(function(s) {  return s._id === id;  });
			observer.next(list[0]);
			observer.complete();
		 });
      });
	}


	private _downloadAllImages(){
		for (var i = 0; i <  this.menus.length; i++) {
			var menu = this.menus[i];
			if(menu && menu.image){
				
				 this.imageLoader.preload(menu.image);
			}
			if(menu && menu.sponsorData){
				if(menu.sponsorData.mapImage){
					this.imageLoader.preload(menu.sponsorData.mapImage);
				}
				if(menu.sponsorData.image1){
					this.imageLoader.preload(menu.sponsorData.image1);
				}
				if(menu.sponsorData.image2){
					this.imageLoader.preload(menu.sponsorData.image2);
				}
				if(menu.sponsorData.image3){
					this.imageLoader.preload(menu.sponsorData.image3);
				}
			}		
		}
	}


}