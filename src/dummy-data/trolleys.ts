import {Trolley} from "../models/trolley";


export const Trolleys: Array<Trolley> = [
  {
    name: 'Zoologico',
    stops: ['Zoologico', 'Biologia', 'Fisica', 'Patio Central', 'Esquina Biblioteca',
      'Ingenieria Agricola', 'Ingenieria Civil e Ingenieria Quimica'],
    schedule: [
      {
        num: 3,
        start: '6:00AM',
        end: '2:00PM'
      },
      {
        num: 1,
        start: '12:00PM',
        end: '8:00PM'
      },
      {
        num: 2,
        start: '2:00PM',
        end: '10:00PM'
      },
    ],
    image: '../../../assets/trolley-rutas/Ruta 1.jpg'
  }
];
