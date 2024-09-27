import { Area } from "./area";

export class Anuncio {
    _id!:string;
    titulo!:string;
    descripcion!: string;
    descripcionCard!:string;
    fechaDesde!: string;
    fechaHasta!: string;
    recursos: {base64:string, type:string, name:string}[]=[];
    tipo!:string;

    constructor(){

    }
}
