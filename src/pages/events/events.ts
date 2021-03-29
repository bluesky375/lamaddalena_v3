import { Component } from '@angular/core';
import { LoadingController, NavController, AlertController } from 'ionic-angular';
import { FindInApi } from  '../../shared/shared';
import { EventDetailPage } from '../pages';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'events',
  templateUrl: 'events.html'
})
export class EventListPage {
   events: any = [];
   testRadioOpen: boolean;
   selectedFilter : any = 'all';
   eventTypes : [any] = [
                         { value : 'all', name : 'ALL' }, 
                         { value : 'culture', name : 'CULTURE' },
                         { value : 'music', name : 'MUSIC' },
                         { value : 'movie', name : 'MOVIE' },
                         { value : 'party', name : 'PARTY' },
                         { value : 'sport', name : 'SPORT' },
                         { value : 'theater', name : 'THEATER' },
                         { value : 'tradition', name : 'TRADITION'}
                        ];
   monthNames : any = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
   constructor(private findInApi : FindInApi, 
              private nav : NavController,
              private alertCtrl: AlertController,
              private translateService: TranslateService,
              private loader : LoadingController) 
  {
    
  }

  ionViewDidLoad() {
       this._getAllEvents(undefined);
  }

  itemTapped($event, item){
     this.nav.push(EventDetailPage, item);
  }


  openFilter($event) {

    let alert = this.alertCtrl.create();
    this.translateService.get('SELECT_EVENT_TYPE').subscribe((res: string) => {
        alert.setTitle(res);
    });
    
    for (var i = 0; i < this.eventTypes.length; i++) {
        var ev = this.eventTypes[i];
        this.translateService.get('EVENT_TYPE.'+ ev.name).subscribe((res: string) => {
          alert.addInput({ type: 'radio', label: res, value: ev.value, checked : ev.value === this.selectedFilter });
        });
    }

    this.translateService.get('CANCEL').subscribe((res: string) => {
         alert.addButton(res);
    });
    var okText = "OK";
    this.translateService.get(okText).subscribe((res: string) => {
         okText = res;
    });
    alert.addButton({
      text: okText,
      handler: data => {
        this.testRadioOpen = false;
        this.selectedFilter = data;
        if(this.selectedFilter === 'all')
            this._getAllEvents(undefined);
        else
          this._getAllEvents(this.selectedFilter);
      }
    });
    alert.present();
  }

  private _getAllEvents(eventType) {
      this.events = [];
      let loader = this.loader.create({
        content: 'Loading ...'
      });

      loader.present().then(() => {
        this.findInApi.getAllEvents(eventType).subscribe( data => {
          for (var i = 0; i < data.length; i++) {
              var ev = data[i];
              ev.imgLogo = 'assets/images/'+ ev.subType +'.png';
              
             // console.log(ev.startDate+';'+ev.title+';'+ev.created+';'+ev.updated);


              if(ev.startDate){
                 var startDt = new Date(ev.startDate);
                 var year = startDt.getFullYear();
                 var month = startDt.getMonth();
                 var _obj = {
                        month : month,
                        year  : year,
                        monthName : this.monthNames[month],
                        events : []
                 };
                
                var groupFound = false;
                for (var j = 0; j < this.events.length; j++) {
                   var grp = this.events[j];
                   if(grp.month === month && grp.year === year){
                        groupFound = true;
                        _obj = grp;
                   }
                }

                _obj.events.push(ev);
                if(!groupFound){
                  this.events.push(_obj);
                }
              }
          }
          loader.dismiss();
        });

      });
  }

}
