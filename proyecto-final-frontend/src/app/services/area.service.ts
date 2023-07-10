import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Area } from '../models/area';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  
  urlBase:string= this.loginService.hostBase +  "area/";

  constructor(private _http:HttpClient,
              private loginService:LoginService) {

  }

  public getArea(id:string):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        
      }),
      params : new HttpParams()
      .append("id",id)
    }
    return this._http.get(this.urlBase + id ,httpOptions);
  }


  public getAreas():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        
      }),
      params : new HttpParams()
     
    }
    return this._http.get(this.urlBase,httpOptions);
  }

  public createArea(area:Area):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        "Content-Type" : "application/json"
      }),
      params : new HttpParams({

      })     
    }
    let body = JSON.stringify(area);
    console.log(area);
    return this._http.post(this.urlBase,body,httpOptions);
  }

  public updateArea(area:Area):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        "Content-Type" : "application/json"
      }),
      params : new HttpParams({

      })
    }
    let body = JSON.stringify(area);
    return this._http.put(this.urlBase + "update/" + area._id,body,httpOptions);
  }

  public deleteArea(id:string):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        
      }),
      params : new HttpParams()
      .append("id",id)
    }
    return this._http.delete(this.urlBase + "eliminar/" + id,httpOptions);
  }

  public buscarAreaByName(nombreArea:string):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        
      }),
      params : new HttpParams()
      .append("nombreArea",nombreArea)
    }
    return this._http.get(this.urlBase + "filtro/" + nombreArea,httpOptions);
  }

}
