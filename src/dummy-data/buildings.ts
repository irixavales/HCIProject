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
      category: [Category.Academic],
      short_description: "Departamento de Matematicas",
      long_description: "",
      coordinates: [1,0],
      image: '../../assets/img/edificios/edificio_monzon.jpg'
    },
    {
      id: 28,
      name: "Edificio Josefina Torres Torres",
      abbreviation: "EE",
      category: [Category.Academic],
      short_description: "Departamento de Enfermeria",
      long_description: "",
      coordinates: [0.5,0.5],
      image: '../../assets/img/edificios/edificio_enfermeria.jpg'
    },
    {
      id: 27,
      name: "Complejo Natatorio",
      abbreviation: "N",
      category: [Category.Academic, Category.Sports],
      short_description: "Complejo Natatorio",
      long_description: "",
      coordinates: [0,1],
      image: '../../assets/img/edificios/natatorio.jpeg'
    }
];
