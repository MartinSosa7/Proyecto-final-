import { Anuncio } from "./anuncio";
import { Persona } from "./persona";

export class Area {
    _id!:string;
    nombreArea!:string;
    tipo!:string;
    responsables:Array<Persona> = new Array<Persona>();
    anuncios:Array<Anuncio> = new Array<Anuncio>();
    turno!:string;
    grado!:string;
    division!:string;

    constructor(){

    }
}
