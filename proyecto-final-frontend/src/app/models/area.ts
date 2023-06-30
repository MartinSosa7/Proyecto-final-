import { Persona } from "./persona";

export class Area {
    _id!:string;
    nombreArea!:string;
    tipo!:string;
    responsables:Array<Persona> = new Array<Persona>();

    constructor(){

    }
}
