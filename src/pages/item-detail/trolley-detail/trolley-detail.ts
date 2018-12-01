import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-trolley-detail',
  templateUrl: 'trolley-detail.html',
})
export class TrolleyDetailPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
  }

}
