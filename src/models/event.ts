/**
 * A model for events
 */
export class Event {

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      // @ts-ignore
      this[f] = fields[f];
    }
  }

}

export interface Event {
  title: string,
  description: string,
  date: Date,
  place: string,
  link?: string,
  image?: string
}
