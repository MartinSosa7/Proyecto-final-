import { Area } from "./area";

export class Anuncio {
    _id!:string;
    titulo!:string;
    descripcion!: string;
    fechaDesde!: string;
    fechaHasta!: string;
    recursos: {base64:string, type:string}[]=[];
    tipo!:string;

    constructor(){

    }
}
