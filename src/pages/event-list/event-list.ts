import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


import {Event} from "../../models/event";
import {EventsProvider} from "../../providers/events";

@IonicPage()
@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html'
})
export class EventListPage {
  currentItems: Array<Event>;
  // showOnList: {title: 'title', subtitle: 'date'};


  constructor(public navCtrl: NavController, public items: EventsProvider) {
    this.currentItems = this.items.query();
  }

  /**
   * The view loaded
   */
  ionViewDidLoad() {
  }


  search() {
    this.navCtrl.push('SearchPage');
  }
}
