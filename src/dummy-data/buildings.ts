import {Building, Category} from "../models/building";

export const Buildings: Array<Building> = [
  {
    id: 1,
    name: "Taller de Arte en Remodelacion",
    category: [Category.Academic, Category.Research],
    short_description: "Departamento de Ingenieria Electrica y de Computadoras",
    long_description: "",
    coordinates: [0,0],
    image: '../../assets/img/edificios/edificio_stefani.jpg'
  },
  {
    id: 2,
    name: "Administracion de Empresas",
    abbreviation: "AE",
    category: [Category.Academic, Category.Research],
    short_description: "Departamento de Ingenieria Electrica y de Computadoras",
    long_description: "",
    coordinates: [0,0],
    image: '../../assets/img/edificios/edificio_stefani.jpg'
  },
  {
    id: 8,
    name: "Biblioteca General",
    category: [Category.Academic],
    short_description: "Departamento de Matematicas",
    long_description: "",
    coordinates: [1,0],
    image: '../../assets/img/edificios/edificio_monzon.jpg'
  },
  {
    id: 9,
    name: "Edificio de Biologia",
    abbreviation: "B",
    category: [Category.Academic],
    short_description: "Departamento de Enfermeria",
    long_description: "",
    coordinates: [0.5,0.5],
    image: '../../assets/img/edificios/edificio_enfermeria.jpg'
  },
  {
    id: 11,
    name: "Centro de Estudiantes",
    abbreviation: "CE",
    category: [Category.Academic, Category.Sports],
    short_description: "Complejo Natatorio",
    long_description: "El Natatorio del Recinto Universitario de Mayagüez (RUM) construido para los XXI Juegos Deportivos Centroamericanos y del Caribe Mayagüez 2010, cuenta con tres piscinas con medidas requeridas por la Federación Internacional de Natación Amateur (FINA) para la celebración de competencias de natación, polo acuático, nado sincronizado y clavado.\n" +
    "En las nuevas instalaciones acuáticas ya se han celebrado los Campeonatos de Natación de la Liga Atlética Interuniversitaria, los Campeonatos de Natación de la Federación Puertorriqueña de Natación, los XXI Juegos Deportivos Centroamericanos y del Caribe Mayagüez 2010, el Campeonato Centroamericano y del Caribe de Natación, Clavados, Polo Acuático, Nado Sincronizado y Aguas Abiertas (CCCAN 2011) y en el verano 2013 tuvimos a los Juegos Juveniles “International Wheelchair & Amputee Sports Federation” (IWAS). \n" +
    "\n" +
    "El Natatorio del RUM posee amplias instalaciones que lo convierten en una facilidad única en su clase. Durante el semestre regular se ofrecen cursos acuáticos del Departamento de Educación Física y clases de natación para niños y adultos. También, se ofrecen horas de recreación para la comunidad universitaria y en el 2013 se incorporó un programa de clavado para niños. Existen amplios espacios para salones, gimnasios, cafeterías y otras áreas que hacen del Natatorio un complejo acuático moderno y accesible a diferentes tipos de actividades.",
    coordinates: [0,1],
    image: '../../assets/img/edificios/natatorio.jpeg'
  },
  {
    id: 14,
    name: "Coliseo Rafael A. Magual",
    abbreviation: "CM",
    category: [Category.Sports, Category.Academic],
    short_description: "Departamento de Ingenieria Electrica y de Computadoras",
    long_description: "",
    coordinates: [0,0],
    image: '../../assets/img/edificios/edificio_stefani.jpg'
  },
  {
    id: 17,
    name: "Complejo Natatorio",
    abbreviation: "N",
    category: [Category.Academic, Category.Sports],
    short_description: "Complejo Natatorio",
    long_description: "El Natatorio del Recinto Universitario de Mayagüez (RUM) construido para los XXI Juegos Deportivos Centroamericanos y del Caribe Mayagüez 2010, cuenta con tres piscinas con medidas requeridas por la Federación Internacional de Natación Amateur (FINA) para la celebración de competencias de natación, polo acuático, nado sincronizado y clavado.\n" +
    "En las nuevas instalaciones acuáticas ya se han celebrado los Campeonatos de Natación de la Liga Atlética Interuniversitaria, los Campeonatos de Natación de la Federación Puertorriqueña de Natación, los XXI Juegos Deportivos Centroamericanos y del Caribe Mayagüez 2010, el Campeonato Centroamericano y del Caribe de Natación, Clavados, Polo Acuático, Nado Sincronizado y Aguas Abiertas (CCCAN 2011) y en el verano 2013 tuvimos a los Juegos Juveniles “International Wheelchair & Amputee Sports Federation” (IWAS). \n" +
    "\n" +
    "El Natatorio del RUM posee amplias instalaciones que lo convierten en una facilidad única en su clase. Durante el semestre regular se ofrecen cursos acuáticos del Departamento de Educación Física y clases de natación para niños y adultos. También, se ofrecen horas de recreación para la comunidad universitaria y en el 2013 se incorporó un programa de clavado para niños. Existen amplios espacios para salones, gimnasios, cafeterías y otras áreas que hacen del Natatorio un complejo acuático moderno y accesible a diferentes tipos de actividades.",
    coordinates: [0,1],
    image: '../../assets/img/edificios/natatorio.jpeg'
  },
  {
    id: 20,
    name: "Edificio Sanchez Hidalgo",
    abbreviation: "SH",
    category: [Category.Academic, Category.Research],
    short_description: "Departamento de Ingenieria Electrica y de Computadoras",
    long_description: "",
    coordinates: [0,0],
    image: '../../assets/img/edificios/edificio_stefani.jpg'
  },
  {
    id: 25,
    name: "Edificio Chardon",
    abbreviation: "CH",
    category: [Category.Academic, Category.Research],
    short_description: "Departamento de Ingenieria Electrica y de Computadoras",
    long_description: "",
    coordinates: [0,0],
    image: '../../assets/img/edificios/edificio_stefani.jpg'
  },
  {
    id: 26,
    name: "Edificio Jesus T. Pinero",
    abbreviation: "P",
    category: [Category.Academic, Category.Research],
    short_description: "Departamento de Ingenieria Electrica y de Computadoras",
    long_description: "",
    coordinates: [0,0],
    image: '../../assets/img/edificios/edificio_stefani.jpg'
  },
  {
    id: 28,
    name: "Edificio Luis de Celis",
    abbreviation: "C",
    category: [Category.Academic],
    short_description: "Departamento de Matematicas",
    long_description: "",
    coordinates: [1,0],
    image: '../../assets/img/edificios/edificio_monzon.jpg'
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
    id: 30,
    name: "Edificio Luis Stefani",
    abbreviation: "AE",
    category: [Category.Academic, Category.Research],
    short_description: "Departamento de Ingenieria Electrica y de Computadoras",
    long_description: "",
    coordinates: [0,0],
    image: '../../assets/img/edificios/edificio_stefani.jpg'
  },
  {
    id: 33,
    name: "Edificio Josefina Torres Torres",
    abbreviation: "EE",
    category: [Category.Academic],
    short_description: "Departamento de Enfermeria",
    long_description: "",
    coordinates: [0.5,0.5],
    image: '../../assets/img/edificios/edificio_enfermeria.jpg'
  }
];
