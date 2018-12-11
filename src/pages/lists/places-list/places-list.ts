import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {BuildingsProvider, SocialPlacesProvider} from "../../../providers";
import {SocialPlace} from "../../../models/social-place";
import {Building, Category} from "../../../models/building";


@IonicPage()
@Component({
  selector: 'page-places-list',
  templateUrl: 'places-list.html',
})
export class PlacesListPage {

  categories = Object.keys(Category).map((key) => {
    return Category[key];
  });

  // academic services
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
   * The view loaded
   */
  ionViewDidLoad() {

  }

  openCategory(category: Category) {
    this.navCtrl.push('BuildingListPage', {
      category: category
    });
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

