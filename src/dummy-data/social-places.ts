import {Category, SocialPlace} from "../models/social-place";


export const SocialPlaces: Array<SocialPlace> = [
  {
    id: 1,
    name: 'Cafe Colegial: Cueva de Tarzan',
    abbreviation: '',
    category: [Category.Coffee, Category.Food],
    short_description: '',
    long_description: 'Localizado en el 1er piso del Centro de Estudiantes de UPRM, promoviendo estilos de vida saludables con buen café en mano. Ven y crea tu ambiente',
    coordinates: [1, 1],
    link: 'https://www.facebook.com/Cueva.de.Tarzan/',
    image: '../../assets/img/cuevatarzan.jpg'
  },
  {
    id: 49,
    name: 'MuSA',
    abbreviation: '',
    category: [Category.Coffee, Category.Food],
    short_description: 'Museo y Senado Academico',
    long_description: 'Localizado en el 1er piso del Centro de Estudiantes de UPRM, promoviendo estilos de vida saludables con buen café en mano. Ven y crea tu ambiente',
    coordinates: [1, 1],
    link: 'https://www.facebook.com/Cueva.de.Tarzan/',
    image: '../../assets/img/cuevatarzan.jpg'
  }
];
