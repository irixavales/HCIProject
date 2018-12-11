import { Injectable } from '@angular/core';
import {ObjectsProvider} from "./objects";
import {Building} from "../models/building";
import {Buildings} from "../dummy-data/buildings";


@Injectable()
export class BuildingsProvider extends ObjectsProvider {

  buildings: Array<Building> = Buildings;

  constructor() {
    super(Buildings);
  }
}
