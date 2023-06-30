import { Area } from "./area";

export class Anuncio {
    _id!:string;
    titulo!:string;
    descripcion!: string;
    fechaDesde!: string;
    fechaHasta!: string;
    recursos: Array<String>=new Array <string>();
    area:Area=new Area();
    tipo!:string;

    constructor(){

    }
}
