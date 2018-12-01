import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';


import {Building} from "../../models/building";
import {BuildingsProvider} from "../../providers";

@IonicPage()
@Component({
  selector: 'building-list-master',
  templateUrl: 'building-list.html'
})
export class BuildingListPage {
  currentItems: Array<Building>;

  constructor(public navCtrl: NavController, public items: BuildingsProvider, public modalCtrl: ModalController) {
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
  openItem(item: Building) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
