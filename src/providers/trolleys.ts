import { Injectable } from '@angular/core';
import {Trolley} from "../models/trolley";
import {Trolleys} from "../dummy-data/trolleys";


@Injectable()
export class TrolleysProvider {

  trolleys: Array<Trolley> = Trolleys;

  constructor() {}

  query(params?: any) {
    // if no parameters are specified, return all
    if (!params) {
      return this.trolleys;
    }

    // return only specified parameters
    return this.trolleys.filter((building) => {
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
