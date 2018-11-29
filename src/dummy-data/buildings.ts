import { Injectable } from '@angular/core';

import {Building, Category} from '../models/building';

@Injectable()
export class Buildings {

  // hardcoded data
  buildings: Array<Building> = [
    {
      id: 30,
      name: "Edificio Luis Stefani",
      abbreviation: "S",
      category: [Category.Academic, Category.Research],
      short_description: "",
      long_description: "",
      coordinates: [0,0],
      image: '../../assets/img/speakers/edificio_stefani.jpg'
    },
    {
      id: 29,
      name: "Edificio Luis Monzon",
      abbreviation: "M",
      category: [],
      short_description: "",
      long_description: "",
      coordinates: [1,0],
      image: '../../assets/img/speakers/edificio_monzon.jpg'
    },

  ];

  defaultItem: any = {

  };


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

  // do we really need function to add building ???
  add(building: Building) {
    this.buildings.push(building);
  }

  // do we really need to delete buildings ????
  delete(building: Building) {
    this.buildings.splice(this.buildings.indexOf(building), 1);
  }
}
