import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from '../models/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  urlBase:string= "http://localhost:3000/api/rol/";

  constructor(private http:HttpClient) {

   }

   getRoles():Observable<any> {

    const httpOption = {
      headers: new HttpHeaders({
      })
    }
    const body = new HttpParams()
    return this.http.get(this.urlBase ,httpOption);
   }

   getRol(id:String):Observable<any>{

    const httpOption = {
      headers: new HttpHeaders({
      })
    }

    const body = new HttpParams()
    return this.http.get(this.urlBase + id ,httpOption);
  }

  createRol(rol:Rol):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }) 
    }
    let body = JSON.stringify(rol);
    console.log(body);
    return this.http.post(this.urlBase,body, httpOptions);
  }
}
