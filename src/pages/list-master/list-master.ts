import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


import {Building} from "../../models/building";
import {BuildingsProvider} from "../../providers";

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage implements OnInit {
  currentItems: Array<Building>;
  showOnList: {title: 'name', subtitle: 'short_description'};

  constructor(public navCtrl: NavController, public items: BuildingsProvider) {}


  ngOnInit() {
    this.currentItems = this.items.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }


  search() {
    this.navCtrl.push('SearchPage');
  }
}
