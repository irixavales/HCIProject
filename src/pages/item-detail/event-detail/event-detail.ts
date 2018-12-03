import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'event-item-detail',
  templateUrl: 'event-detail.html'
})
export class EventDetailPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.item = navParams.get('item');
  }

}
