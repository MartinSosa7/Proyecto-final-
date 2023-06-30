import { Persona } from "./persona";

export class Usuario {
    _id!:string;
    username!:string;
    password!: string;
    persona:Persona = new Persona();

    Usuario(id:string, username:string, password:string, persona:Persona ){
        this._id= id;
        this.username=username;
        this.password= password;
        this.persona=persona;
    }
}
