import { Persona } from "./persona";
import { Rol } from "./rol";

export class Formulario {
    tipo!:string;
    descripcion!:string;
    archivo!:string;
    mostrarPara: Array<Rol> = new Array<Rol>();
    creadoPor!: Persona;
}
