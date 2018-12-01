/**
 * A model for trolleys
 */
import {Time} from "@angular/common";

export class Trolley {

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      // @ts-ignore
      this[f] = fields[f];
    }
  }

}

export interface Trolley {
  name: string,
  stops: string[],
  schedule: Schedule[],
  image?: string
}

interface Schedule {
  // this is the number of buses that work during this schedule
  num: number,
  start: string,
  end: string
}
