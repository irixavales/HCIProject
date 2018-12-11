import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-full-size-map',
  templateUrl: 'full-size-map.html',
})
export class FullSizeMapPage {

  map_img_path = '../../assets/img/Mapa del RUM.jpg';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FullSizeMapPage');
  }

}
