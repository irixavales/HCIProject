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
  // academic buildings
  currentBuildings: Array<Building>;

  // social places
  currentSocialPlaces: Array<any>;

  // current selected page
  selectedPage: string = 'academic';

  // path for default image when elements have no images
  default_img_path = '../../../assets/img/no_img.png';

  constructor(public navCtrl: NavController, public buildings: BuildingsProvider, public modalCtrl: ModalController) {
    this.currentBuildings = this.buildings.query();
  }

  /**
   * The view loaded, let's query our buildings for the list
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
   * Navigate to search page
   */
  search() {
    this.navCtrl.push('SearchPage');
  }
}
