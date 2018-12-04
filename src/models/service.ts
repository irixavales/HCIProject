/**
 * A model for services
 */
export class Service {

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      // @ts-ignore
      this[f] = fields[f];
    }
  }

}

export interface Service {
  id: number, // unique id
  name: string, // full name
  building_location: string, // where the service is provided
  long_description?: string, // paragraph description
  telephone: string, // phone number to contact this office
  image?: string // path of image
  link?: string
}
