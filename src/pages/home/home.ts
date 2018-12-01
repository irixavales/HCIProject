import {Component, ViewChild} from '@angular/core';
import {IonicPage, Nav, NavController, NavParams} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";

interface PageItem {
  title: string
  component: any
  icon: string
}
type PageList = PageItem[]


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild(Nav) nav: Nav;

  pages: PageList;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Places', component: 'TabsPage', icon: 'pin' },
      { title: 'Events', component: 'TabsPage', icon: 'people' },
      { title: 'Trolleys', component: 'TabsPage', icon: 'bus' },
      { title: 'Map', component: 'BuildingListPage', icon: 'map' },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  open(page: PageItem) {
    this.navCtrl.push(page.component, {
      selected: this.pages.indexOf(page)
    });
  }

}
