import { Injectable } from '@angular/core';
import {Services} from "../dummy-data/services";
import {Service} from "../models/service";
import {ObjectsProvider} from "./objects";


@Injectable()
export class ServicesProvider extends ObjectsProvider {

  services: Array<Service> = Services;

  constructor() {
    super(Services);
  }
}
