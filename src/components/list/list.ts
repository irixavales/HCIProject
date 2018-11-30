import {Component, Input, OnInit} from '@angular/core';
import {Building} from "../../models/building";
import {Event} from "../../models/event";
import {NavController} from "ionic-angular";


@Component({
  selector: 'list-component',
  templateUrl: 'list.html'
})
export class ListComponent implements OnInit {

  @Input('items') currentItems: Array<Building> | Array<Event>;
  @Input('show') show: {title: string, subtitle: string};
  @Input('prueba') p: string;

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
    console.log(this.currentItems);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Building) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }


}
