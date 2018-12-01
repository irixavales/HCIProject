import {Building, Category} from "../models/building";

export const Buildings: Array<Building> = [
    {
      id: 30,
      name: "Edificio Luis Stefani",
      abbreviation: "S",
      category: [Category.Academic, Category.Research],
      short_description: "Departamento de Ingenieria Electrica y de Computadoras",
      long_description: "",
      coordinates: [0,0],
      image: '../../assets/img/edificios/edificio_stefani.jpg'
    },
    {
      id: 29,
      name: "Edificio Luis Monzon",
      abbreviation: "M",
      category: [],
      short_description: "Departamento de Matematicas",
      long_description: "",
      coordinates: [1,0],
      image: '../../assets/img/edificios/edificio_monzon.jpg'
    },
];
