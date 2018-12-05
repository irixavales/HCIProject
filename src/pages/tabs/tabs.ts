import {Component, OnInit, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Tabs} from 'ionic-angular';

import { TabsRoot } from '../';
import {SearchPage} from "../search/search";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage implements OnInit {

  @ViewChild('myTabs') tabRef: Tabs;
  @ViewChild('home_page') home: boolean;
  // @ViewChild('navCtrl') navChild: NavController;

  // selected tab to be displayed when this page gets called
  selectedTab: number;

  // tabs to appear on page
  tabsRoot: any = TabsRoot;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.selectedTab = this.navParams.get('selected');
  }

  ionViewDidEnter() {
  }

  ngAfterViewInit() {
    // console.log(this.navChild.first());
  }

  /**
   * Change the current tab
   * @param {number} index
   */
  change(index: number) {
    this.selectedTab = index;
  }

  /**
   * Navigate to search page
   */
  search() {
    this.navCtrl.push('SearchPage');
  }

}
