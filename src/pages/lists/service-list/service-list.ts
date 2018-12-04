import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import {Service} from "../../../models/service";
import {ServicesProvider} from "../../../providers/index";


@IonicPage()
@Component({
  selector: 'service-list',
  templateUrl: 'service-list.html'
})
export class ServiceListPage {
  currentItems: Array<Service>;

  default_img_path = '../../assets/img/no_img.png';

  constructor(public navCtrl: NavController, public items: ServicesProvider, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();
  }

  /**
   * The view loaded
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
