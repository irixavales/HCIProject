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
    return this.buildings.filter((building) => {
      for (let key in params) {
        let field = building[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return building;
        } else if (field == params[key]) {
          return building;
        }
      }
      return null;
    });
  }

}
