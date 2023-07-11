import { Persona } from "./persona";
import { Rol } from "./rol";

export class Formulario {
    _id!:string;
    tipo!:string;
    descripcion!:string;
    archivos:{base64:string, type:string, name:string}[] = [];
    fecha!:string;

    constructor(){

    }


}
