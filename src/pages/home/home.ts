import {Component, ViewChild} from '@angular/core';
import {IonicPage, Nav, NavController, NavParams} from 'ionic-angular';
import {MainPage} from "../index";
import {TabsRoot} from '../';

interface PageItem {
  root: string
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
    this.pages = TabsRoot;
  }

  ionViewDidLoad() {

  }

  open(page: PageItem) {
    this.navCtrl.push(MainPage, {
      selected: this.pages.indexOf(page)
    });
  }

}
