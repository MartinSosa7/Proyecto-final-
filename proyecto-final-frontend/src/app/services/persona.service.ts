import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaFormComponent } from '../components/gestionPersona/persona-form/persona-form.component';
import { Persona } from '../models/persona';
import { Rol } from '../models/rol';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  urlBase:string= this.loginService.hostBase + "persona/";

  constructor(private _http:HttpClient,
              private loginService:LoginService) {

  }

  public getPersona(id:string):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        
      }),
      params : new HttpParams()
      .append("id",id)
    }
    return this._http.get(this.urlBase + id ,httpOptions);
  }


  public getPersonas():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        
      }),
      params : new HttpParams()
    }
    return this._http.get(this.urlBase ,httpOptions);
  }

  public createPersona(persona:Persona):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        "Content-Type" : "application/json"
      }),
      params : new HttpParams({

      })     
    }
    let body = JSON.stringify(persona);
    console.log(persona);
    return this._http.post(this.urlBase ,body ,httpOptions);
  }

  public updatePersona(persona:Persona):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        "Content-Type" : "application/json"
      }),
      params : new HttpParams({

      })
    }
    let body = JSON.stringify(persona);
    console.log(persona);
    return this._http.put(this.urlBase + "update/" + persona._id,body ,httpOptions);
  }

  public deletePersona(id:string):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        
      }),
      params : new HttpParams()
      .append("id",id)
    }
    return this._http.delete(this.urlBase + "eliminar/" + id,httpOptions);
  }

  public getPersonaByDni(dni:string):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        
      }),
      params : new HttpParams()
      .append("dni",dni)
    }
    return this._http.get(this.urlBase + "filtro/" + dni ,httpOptions);
  }

  public addRol(rol:Rol,idPersona:string):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        "Content-Type" : "application/json"
      }),
      params : new HttpParams()    
      
    }
    let body = JSON.stringify(rol);
    console.log(rol);
    return this._http.post(this.urlBase + "addRol/" + idPersona + "/rol" ,body ,httpOptions);
  }

  public deleteRol(idPersona:string,rol:Rol):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        "Content-Type" : "application/json"
      }),
      params : new HttpParams()

    }
    return this._http.delete(this.urlBase + "delete/" + idPersona + "/rol/" + rol._id,httpOptions);
  }

}

