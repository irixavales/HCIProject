/**
 * A model for social places
 */
export class SocialPlace {

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      // @ts-ignore
      this[f] = fields[f];
    }
  }

}

export interface SocialPlace {
  id: number, // unique id
  name: string, // full name
  abbreviation: string, // abbreviation
  category?: Category[], // array of categories where building could be classified
  short_description: string, // 2 line description
  long_description?: string, // paragraph description
  coordinates: [number, number] // coordinates of the location in the map
  link: string,
  image?: string // path of image
}

export enum Category {
  Food = 'Food',
  Coffee = 'Coffee'
}
