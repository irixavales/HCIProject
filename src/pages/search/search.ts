import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Building} from "../../models/building";
import {BuildingsProvider, EventsProvider} from "../../providers";

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: Array<any>;

  default_img_path = '../../assets/img/no_img.png';

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public buildings: BuildingsProvider,
              public events: EventsProvider) { }

  /**
   * Perform a service for the proper buildings.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = [];
    this.buildings.query({
      name: val, short_description: val, abbreviation: val, category: val, long_description: val
    }).map(item => {this.currentItems.push(item)});
    this.events.query({
      title: val, date: val, description: val, place: val
    }).map(item => {this.currentItems.push(item)});
    console.log(this.currentItems);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: any) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

}
