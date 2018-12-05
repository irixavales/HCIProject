import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import {EventsProvider} from "../../../providers/index";
import {Event} from "../../../models/event";

@IonicPage()
@Component({
  selector: 'event-list',
  templateUrl: 'event-list.html'
})
export class EventListPage {

  // boolean to determine if currently on home page, i.e. the detail page has not been opened
  home_page: boolean = true;

  currentItems: Array<Event>;

  default_img_path = '../../../assets/img/no_img.png';

  monthStrings = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  currentMonth = new Date().getMonth();
  // this will take the next three months
  months = [this.monthStrings[this.currentMonth]
    , this.monthStrings[(this.currentMonth+1)%12],
    // this.monthStrings[(this.currentMonth+2)%12]
  ];

  constructor(public navCtrl: NavController, public items: EventsProvider, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();
  }

  /**
   * The view loaded, let's query our services for the list
   */
  ionViewDidLoad() {
  }


  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Event) {
    this.home_page = false;
    this.navCtrl.push('EventDetailPage', {
      item: item
    });
  }

  filterByMonth(month: string) {
    return this.currentItems.filter((event) => {
      let event_month = event.date.getMonth();
      if (this.months[(event_month+1)%12] == month) {
        return event;
      }
    })
  }
}
