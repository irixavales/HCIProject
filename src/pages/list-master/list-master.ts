import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';


import {Building} from "../../models/building";
import {Buildings} from "../../providers";

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Array<Building>;

  constructor(public navCtrl: NavController, public items: Buildings, public modalCtrl: ModalController) {
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
