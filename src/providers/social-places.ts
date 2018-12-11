import { Injectable } from '@angular/core';
import {SocialPlace} from "../models/social-place";
import {SocialPlaces} from "../dummy-data/social-places";
import {ObjectsProvider} from "./objects";


@Injectable()
export class SocialPlacesProvider extends ObjectsProvider {

  socialPlaces: Array<SocialPlace> = SocialPlaces;

  constructor() {
    super(SocialPlaces);
  }
}
