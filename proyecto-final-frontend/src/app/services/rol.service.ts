import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from '../models/rol';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  urlBase:string= this.loginService.hostBase + "rol/";

  constructor(private _http:HttpClient,
              private loginService:LoginService) {

  }

  public getRol(id:string):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
      }),
      params : new HttpParams()
      //.append("id",id)
    }
    return this._http.get(this.urlBase + id ,httpOptions);
  }

  public getRoles():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
      }),
      params : new HttpParams()
    }
    return this._http.get(this.urlBase ,httpOptions);
  }

  public createRol(rol:Rol):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        "Content-Type" : "application/json"
      }),
      params : new HttpParams({
      })     
    }
    let body = JSON.stringify(rol);
    console.log(rol);
    return this._http.post(this.urlBase ,body ,httpOptions);
  }

  public updateRol(rol:Rol):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        "Content-Type" : "application/json"
      }),
      params : new HttpParams({

      })
    }
    let body = JSON.stringify(rol);
    return this._http.put(this.urlBase + "update/" + rol._id ,body ,httpOptions);
  }


  public deleteRol(id:string):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
      }),
      params : new HttpParams()
      //.append("id",id)
    }
    return this._http.delete(this.urlBase + "eliminar/" + id ,httpOptions);
  }

}
