import { Persona } from "./persona";
import { Rol } from "./rol";

export class Formulario {
    _id!:string;
    tipo!:string;
    descripcion!:string;
    archivo: {base64:string, type:string, name:string}[]=[]
    //mostrarPara: Array<Rol> = new Array<Rol>();
    rol!:string;
    creadoPor!: Persona;

    constructor(){

    }


}
