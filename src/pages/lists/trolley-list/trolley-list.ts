import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import {TrolleysProvider} from "../../../providers/index";
import {Trolley} from "../../../models/trolley";

@IonicPage()
@Component({
  selector: 'trolley-list',
  templateUrl: 'trolley-list.html'
})
export class TrolleyListPage {
  currentItems: Array<Trolley>;

  constructor(public navCtrl: NavController, public items: TrolleysProvider, public modalCtrl: ModalController) {
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
    this.navCtrl.push('TrolleyDetailPage', {
      item: item
    });
  }
}
