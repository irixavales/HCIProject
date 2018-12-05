import { Injectable } from '@angular/core';
import {SocialPlace} from "../models/social-place";
import {SocialPlaces} from "../dummy-data/social-places";


@Injectable()
export class SocialPlacesProvider {

  socialPlaces: Array<SocialPlace> = SocialPlaces;

  constructor() {}

  query(params?: any) {
    // if no parameters are specified, return all
    if (!params) {
      return this.sorted();
    }

    // return only specified parameters
    return this.socialPlaces.filter((place) => {
      for (let key in params) {
        let field = place[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return place;
        } else if (field == params[key]) {
          return place;
        }
      }
      return null;
    });
  }

  sorted() {
    return this.socialPlaces = this.socialPlaces.sort((a, b) => {
      return compare(a.name, b.name);
    });
  }
}

function compare(a: string, b: string) {
  return (a < b ? -1 : 1);
}
