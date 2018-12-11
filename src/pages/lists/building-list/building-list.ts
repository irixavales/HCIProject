import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {Building, Category} from "../../../models/building";
import {BuildingsProvider, SocialPlacesProvider} from "../../../providers/index";
import {CategoryFilterPipe} from "../../../pipes/category-filter/category-filter";


@IonicPage()
@Component({
  selector: 'building-list-master',
  templateUrl: 'building-list.html',
  // pipes: [CategoryFilterPipe]
})
export class BuildingListPage {

  currentBuildings: Array<Building>;

  category: string;

  // path for default image when elements have no images
  default_img_path = '../../../assets/img/no_img.png';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public buildings: BuildingsProvider,
              public socialPlaces: SocialPlacesProvider) {

    this.currentBuildings = this.buildings.query();
    this.category = this.navParams.get('category');
    // this.filterByCategory(category);
  }

  /**
   * The view loaded
   */
  ionViewDidLoad() {

  }

  filterByCategory(category: string) {
    this.currentBuildings = this.currentBuildings.filter((building) => {
      console.log(this.currentBuildings);
      return building.category.filter((cat) => {
        if(cat == category) {
          console.log(building);
          return building;
        }
        else {

        }
      });

    });
    console.log(this.currentBuildings);
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
