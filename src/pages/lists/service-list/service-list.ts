import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import {Service} from "../../../models/service";
import {ServicesProvider} from "../../../providers/index";


@IonicPage()
@Component({
  selector: 'trolley-list',
  templateUrl: 'trolley-list.html'
})
export class ServiceListPage {
  currentItems: Array<Service>;

  constructor(public navCtrl: NavController, public items: ServicesProvider, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();
  }

  /**
   * The view loaded, let's query our services for the list
   */
  ionViewDidLoad() {
  }


  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Service) {
    this.navCtrl.push('ServiceDetailPage', {
      item: item
    });
  }
}
