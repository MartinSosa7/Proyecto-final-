import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlBase:string= "http://localhost:3000/api/usuario/";
  
  constructor(private _http:HttpClient) { 
    
  }
  
  public createUser(usuario:Usuario):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }) 
    } 
    let body = JSON.stringify(usuario);
    console.log(body);
    return this._http.post(this.urlBase,body, httpOptions);
  }
  
 public login(username: string, password: string):Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
    } 
    let body = JSON.stringify({ username: username, password: password });
    console.log(body);
    return this._http.post(this.urlBase + 'login', body, httpOption);
 }

 public logout() {
    //borro el vble almacenado mediante el storage
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("userid");
    sessionStorage.removeItem("rol");
 } 

 public userLoggedIn(){
    var resultado = false;
    var usuario = sessionStorage.getItem("user");
    if(usuario!=null)
    {
       resultado = true;
    }
  return resultado;
  }

  public userLogged(){
    var usuario = sessionStorage.getItem("user");
    return usuario;
  }

  public idLogged(){
    var id = sessionStorage.getItem("userid");
    return id;
  }


  public getUsuarioByPersona(persona:Persona):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        "Content-Type" : "application/json"
      }),
      params : new HttpParams()
      .append("dni",persona.dni)
    }
    console.log(persona.dni);
    return this._http.get(this.urlBase+"filtro/"+persona.dni,httpOptions);
  }

}
