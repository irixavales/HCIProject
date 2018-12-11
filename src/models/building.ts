/**
 * A model for buildings
 */
export class Building {

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      // @ts-ignore
      this[f] = fields[f];
    }
  }

}

export interface Building {
  id: number, // unique id
  name: string, // full name
  abbreviation?: string, // abbreviation
  category?: Category[], // array of categories where building could be classified
  short_description: string, // 2 line description
  long_description?: string, // paragraph description
  coordinates: [number, number] // coordinates of the location in the map
  image?: string // path of image
}

// Categories into which building may belong. Building may have more than one category.
export enum Category {
  // facultades
  ArtesYCiencias = "Artes y Ciencias",
  AdministracionDeEmpresas = "Administracion de Empresas",
  CienciasAgricolas = "Ciencias Agricolas",
  Ingenieria = "Ingenieria",
  // decanatos
  DecanatoDeAdministracion = "Decanato de Administracion",
  DecanatoDeAsuntosAcademicos = "Decanato de Asuntos Academicos",
  DecanatoDeEstudiantes = "Decanato de Estudiantes",

  CentroDeInvestigacionYDesarrollo = "Centro de Investigacion y Desarrollo",
  Rectoria = "Rectoria",
  //
  // Academic = "Academic",
  // Sports = "Sports",
  // Administrative = "Administrative",
  // Art = "Art",
  // Research = "Research",
  // // no se que mas hace falta... hacer brainstorming despues
  // // categorias pueden ser muchas (incluyendo facultades, concentraciones, etc). esto puede servir para el search
}
