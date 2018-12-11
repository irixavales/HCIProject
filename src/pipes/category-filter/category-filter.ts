import { Pipe, PipeTransform } from '@angular/core';
import {Building} from "../../models/building";


@Pipe({
  name: 'categoryFilter',
})
export class CategoryFilterPipe implements PipeTransform {

  transform(value: Array<Building>, filter: string) {

    let filteredBuildings: Array<Building> = [];

    for (var i=0; i<value.length; i++) {
      for(var j=0; j<value[i].category.length; j++) {
        if(value[i].category[j] == filter) {
          filteredBuildings.push(value[i]);
        }
      }
    }

    return filteredBuildings;
  };
}
