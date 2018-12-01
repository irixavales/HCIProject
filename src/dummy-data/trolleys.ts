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
    image: '../../../assets/img/trolley-rutas/Ruta 1 cropped.jpeg'
  },
  {
    name: 'Expreso Zoologico a Fisica',
    stops: ['Zoologico', 'Fisica'],
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
    image: '../../../assets/img/trolley-rutas/Ruta 2 cropped.jpeg'
  },
  {
    name: 'Interna',
    stops: ['Esquina Biblioteca', 'Patio Central', 'Fisica', 'Stefani', 'Centro de Estudiantes',
      'Edificio Pinero', 'Gimnasio', 'Administracion de Empresas'],
    schedule: [
      {
        num: 1,
        start: '6:00AM',
        end: '2:00PM'
      },
      {
        num: 1,
        start: '2:00PM',
        end: '10:00PM'
      }
    ],
    image: '../../../assets/img/trolley-rutas/Ruta 3 cropped.jpeg'
  },
  {
    name: 'Terrace',
    stops: ['Parque Terrace', 'Finca Alzamora', 'Cita', 'Edificio A', 'Administracion de Empresas',
      'Esquina Biblioteca', 'Patio Central', 'Fisica'],
    schedule: [
      {
        num: 1,
        start: '6:00AM',
        end: '2:00PM'
      },
      {
        num: 1,
        start: '10:30AM',
        end: '6:30PM'
      },
      {
        num: 1,
        start: '6:30PM',
        end: '9:30PM'
      }
    ],
    image: '../../../assets/img/trolley-rutas/Ruta 4 cropped.jpeg'
  }
];
