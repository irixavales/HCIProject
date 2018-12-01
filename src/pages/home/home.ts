import {Component, ViewChild} from '@angular/core';
import {IonicPage, Nav, NavController, NavParams} from 'ionic-angular';
import {ListMasterPage} from "../list-master/list-master";
import {EventListPage} from "../event-list/event-list";
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
      { title: 'Events', component: 'EventListPage', icon: 'people' },
      { title: 'Trolleys', component: 'ListMasterPage', icon: 'bus' },
      { title: 'Map', component: 'ListMasterPage', icon: 'map' },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  open(page: string) {
    this.navCtrl.push(page);
  }

}
