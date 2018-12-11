import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ImageViewerController} from "ionic-img-viewer";


@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;

  map_with_pin: string;
  map;

  _imageViewerCtrl: ImageViewerController;

  constructor(public navCtrl: NavController, navParams: NavParams, imageViewerCtrl: ImageViewerController) {
    this.item = navParams.get('item');
    this.map_with_pin = '../../assets/img/mapsRum/MapaRUM_pin' + this.item.id + '.jpg';
    this._imageViewerCtrl = imageViewerCtrl;
    this.map = new Image();
    this.map.src = this.map_with_pin;
  }

  showMap() {
    const imageViewer = this._imageViewerCtrl.create(this.map);
    imageViewer.present();
  }

}
