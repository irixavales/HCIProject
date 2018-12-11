import { Injectable } from '@angular/core';
import {Event} from "../models/event";
import {Events} from "../dummy-data/events";


@Injectable()
export class EventsProvider {

  buildings: Array<Event> = Events;

  constructor() {}

  query(params?: any) {
    // if no parameters are specified, return all
    if (!params) {
      return this.buildings;
    }

    // return only specified parameters
    return this.buildings.filter((object) => {
      for (let key in params) {
        let field = object[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return object;
        } else if (field == params[key]) {
          return object;
        }
      }
      return null;
    });
  }

  sorted() {
    this.buildings = this.buildings.sort((a, b) => {
      return compare(a.date, b.date);
    })
  }
}

function compare(a: Date, b: Date) {
  if (a.getFullYear() != b.getFullYear()) {
    return (a.getFullYear() < b.getFullYear() ? -1 : 1);
  }
  else if (a.getMonth() != b.getMonth()) {
    return (a.getMonth() < b.getMonth() ? -1 : 1);
  }
  else if (a.getDay() != b.getDay()) {
    return (a.getDay() < b.getDay() ? -1 : 1);
  }
  else if (a.getHours() != b.getHours()) {
    return (a.getHours() < b.getHours() ? -1 : 1);
  }
  else if (a.getMinutes() != b.getMinutes()) {
    return (a.getMinutes() < b.getMinutes() ? -1 : 1);
  }
  return 1;
}

