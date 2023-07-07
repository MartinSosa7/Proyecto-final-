import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Area } from '../models/area';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class ServiciosAreaService {

  personaURL: string = 'http://localhost:3000/api/persona';
  areaURL: string = 'http://localhost:3000/api/area';
  constructor(private _http: HttpClient) { }

  getPersonas(): Observable<any> {
    const HttpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }

    return this._http.get(this.personaURL, HttpOptions);

  }

  getArea(idArea: any): Observable<any> {
    const HttpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }

    return this._http.get(this.areaURL + '/' + idArea, HttpOptions);
  }

  postArea(area: Area): Observable<any> {
    const HttpOptions = {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      }),
      params: new HttpParams()
    }
    const body = JSON.stringify(area);

    return this._http.post(this.areaURL,body, HttpOptions);
  }

  putArea(idArea: any, area: Area):Observable<any>{
    const HttpOptions = {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      }),
      params: new HttpParams()
    }
    const body = JSON.stringify(area);
    return this._http.put(this.areaURL+'/update/'+idArea,body,HttpOptions);
  }

  deleteArea(idArea: any):Observable<any>{
    const HttpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._http.delete(this.areaURL+'/'+idArea, HttpOptions);
  }

  getAreas():Observable<any>{
    const HttpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._http.get(this.areaURL,HttpOptions);
  }

}
