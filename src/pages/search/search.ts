import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {
  BuildingsProvider,
  EventsProvider,
  ServicesProvider,
  SocialPlacesProvider,
  TrolleysProvider
} from "../../providers";

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
              public events: EventsProvider,
              public services: ServicesProvider,
              public socialPlaces: SocialPlacesProvider,
              public trolleys: TrolleysProvider) { }

  /**
   * Perform a service for the proper services.
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

    this.services.query({
      name: val, building_location: val
    }).map(item => {this.currentItems.push(item)});

    this.socialPlaces.query({
      name: val, abbreviation: val, short_description: val, category: val
    }).map(item => {this.currentItems.push(item)});

    this.trolleys.query({
      name: val, stops: val
    }).map(item => {this.currentItems.push(item)});

  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: any) {
    let page: string;
    // console.log(item);
    // console.log(item.constructor.name);
    switch (item.name) {
      case('Building'):
        page = 'ItemDetailPage';
        break;
      case('Event'):
        page = 'EventDetailPage';
        break;
      case('Service'):
        page = 'ServiceDetailPage';
        break;
      case('Trolley'):
        page = 'TrolleyDetailPage';
        break;
      default:
        page = 'ItemDetailPage';
    }
    this.navCtrl.push(page, {
      item: item
    });
  }

}
