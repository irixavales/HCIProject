import {Component, ViewChild} from '@angular/core';
import {IonicPage, Nav, NavController, NavParams} from 'ionic-angular';
import {MainPage} from "../index";

interface PageItem {
  title: string
  icon: string
}
type PageList = PageItem[]


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  // @ViewChild(Nav) nav: Nav;

  pages: PageList;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Places', icon: 'pin' },
      { title: 'Events', icon: 'people' },
      { title: 'Trolleys', icon: 'bus' },
      { title: 'Map', icon: 'map' },
    ]
  }

  ionViewDidLoad() {

  }

  open(page: PageItem) {
    this.navCtrl.push(MainPage, {
      selected: this.pages.indexOf(page)
    });
  }

}
