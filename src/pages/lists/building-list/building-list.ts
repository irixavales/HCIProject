import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';


import {Building} from "../../../models/building";
import {SocialPlace} from "../../../models/social-place";
import {BuildingsProvider, SocialPlacesProvider} from "../../../providers/index";


@IonicPage()
@Component({
  selector: 'building-list-master',
  templateUrl: 'building-list.html'
})
export class BuildingListPage {
  // academic buildings
  currentBuildings: Array<Building>;

  // social places
  currentSocialPlaces: Array<SocialPlace>;

  // current selected page
  // set to academic because this is the default tab when page is opened
  selectedPage: string = 'academic';

  // path for default image when elements have no images
  default_img_path = '../../../assets/img/no_img.png';

  constructor(public navCtrl: NavController,
              public buildings: BuildingsProvider,
              public socialPlaces: SocialPlacesProvider) {
    this.currentBuildings = this.buildings.query();
    this.currentSocialPlaces = this.socialPlaces.query();
  }

  /**
   * The view loaded, let's query our buildings for the list
   */
  ionViewDidLoad() {
    console.log(this.currentBuildings);
    console.log(this.currentSocialPlaces);
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
