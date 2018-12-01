import {Component, OnInit, ViewChild} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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

  selectedTab: number;

  tabsRoot: any = TabsRoot;

  content: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public translateService: TranslateService) {
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
  }

  ionViewDidEnter() {
    this.tabRef.select(this.selectedTab);
  }

  change(index: number) {
    this.selectedTab = index;
    this.tabRef.select(this.selectedTab);
  }

  /**
   * Navigate to search page
   */
  search() {
    this.navCtrl.push('SearchPage');
  }

}
