import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';


import {Building} from "../../../models/building";
import {BuildingsProvider} from "../../../providers/index";

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

  /**
   * Navigate to home page
   */
  home() {
    // this.navCtrl.popTo('MyApp');
    // this.navCtrl.popAll();
    // this.navCtrl.setRoot('HomePage');
    // this.navCtrl.push('HomePage');
    // this.navCtrl.remove(1);
    // this.navCtrl.setRoot('HomePage');
    // this.navCtrl.popToRoot();
    // this.navCtrl.insert(0, 'HomePage');
    // this.navCtrl.popToRoot();
    // this.navCtrl.
  }

  /**
   * Navigate to search page
   */
  search() {
    this.navCtrl.push('SearchPage');
  }
}
