import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import {EventsProvider} from "../../../providers/index";
import {Event} from "../../../models/event";

@IonicPage()
@Component({
  selector: 'event-list',
  templateUrl: 'event-list.html'
})
export class EventListPage {
  currentItems: Array<Event>;

  constructor(public navCtrl: NavController, public items: EventsProvider, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }


  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Event) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}