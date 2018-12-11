import { Injectable } from '@angular/core';


@Injectable()
export class ObjectsProvider {

  objects: Array<any>;

  constructor(objectsArray: Array<any>) {
    this.objects = objectsArray;
    this.sorted();
  }

  query(params?: any) {
    // if no parameters are specified, return all
    if (!params) {
      return this.objects;
    }

    // return only specified parameters
    return this.objects.filter((object) => {
      for (let key in params) {
        let field = object[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return object;
        } else if (field == params[key]) {
          return object;
        }
      }
      return null;
    });
  }

  sorted() {
    return this.objects = this.objects.sort((a, b) => {
      return compare(a.name, b.name);
    });
  }
}

function compare(a: string, b: string) {
  return (a < b ? -1 : 1);
}
