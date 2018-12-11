import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {FullSizeMapPage} from "../full-size-map/full-size-map";
import {coordinates} from "../../dummy-data/map-coordinates";


@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  map_path = '../../assets/img/Mapa del RUM.jpg';
  pin_path = '../../assets/img/pin.png';

  coordinates = coordinates[0].coordinates;


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    var map_height, map_width;
    var pin_height, pin_width;
    var x_pin, y_pin;

    var img_map = new Image();
    img_map.onload = function() {
      map_height = img_map.height;
      map_width = img_map.width;
    };
    img_map.src = this.map_path;

    var img_pin = new Image();
    img_pin.onload = function() {
      pin_height = img_pin.height;
      pin_width = img_pin.width;
    };
    img_pin.src = this.pin_path;

    x_pin = map_width * this.coordinates[0] / 100 - pin_width / 2;
    y_pin = map_height * this.coordinates[1] / 100 - pin_height;

    (<HTMLElement>document.querySelector('img.pin')).style.left = this.coordinates[0] + '%';
    (<HTMLElement>document.querySelector('img.pin')).style.top = this.coordinates[1] + '%';

    console.log(document.querySelector('img.pin'));
    console.log(map_width, map_height);

  }

  showFullMap() {
    let modal = this.modalCtrl.create(FullSizeMapPage);
    modal.present();
  }

  showCoordenates($event) {
    var img = new Image()
    img.onload = function() {
      var height = img.height;
      var width = img.width;
      console.log(img);
      console.log(width, height);
      console.log($event.x, $event.y);
      console.log($event.x/width * 100 + '%', $event.y/height * 100 + '%');
      console.log($event.clientX/width * 100 + '%', $event.clientY/height * 100);
      console.log($event.layerX/width * 100 + '%', $event.layerY/height * 100 + '%');
      console.log($event.offsetX/width * 100 + '%', $event.offsetY/height * 100 + '%');
      console.log($event.pageX/width * 100 + '%', $event.pageY/height * 100 + '%');
      console.log($event.screenX/width * 100 + '%', $event.screenY/height * 100 + '%');

    };
    img.src = '../../assets/img/Mapa del RUM.jpg';
    // console.log($event);
  }
}
