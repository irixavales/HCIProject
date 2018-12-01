import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import {EventsProvider} from "../../providers";
import {Event} from "../../models/event";

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
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
