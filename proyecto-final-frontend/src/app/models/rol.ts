import { Persona } from "./persona";

export class Rol {
    _id!:string;
    nombreRol!: string;
    verAnuncio!: boolean;
    creaAnuncio!: boolean;
    gestiona!:boolean;
    personas:Array<Persona> = new Array <Persona>();

    constructor(){
        
    }
}
