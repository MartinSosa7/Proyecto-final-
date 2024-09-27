import { Persona } from "./persona";
import { Rol } from "./rol";

export class Formulario {
    _id!:string;
    tipo!:string;
    descripcion!:string;
    archivo: {base64:string, type:string, name:string}[]=[]
    // archivo!:FormData;
    rol!:string;
    creadoPor!: Persona;

    constructor(){

    }


}
