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

  // selected tab to be displayed when this page gets called
  selectedTab: number;

  // tabs to appear on page
  tabsRoot: any = TabsRoot;

  // no se
  content: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // que carajo es esto
    // translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE', 'TAB4_TITLE']).subscribe(values => {
    //   this.tab1Title = values['TAB1_TITLE'];
    //   this.tab2Title = values['TAB2_TITLE'];
    //   this.tab3Title = values['TAB3_TITLE'];
    //   this.tab4Title = values['TAB4_TITLE'];
    // });

  }

  ngOnInit() {
    this.selectedTab = this.navParams.get('selected');
    this.tabRef.select(this.selectedTab);
  }

  ionViewDidEnter() {
    console.log(document.getElementById('myTabs'));
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
