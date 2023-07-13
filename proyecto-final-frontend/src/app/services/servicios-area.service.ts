import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Area } from '../models/area';
import { Persona } from '../models/persona';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ServiciosAreaService {

  personaURL: string = this.loginService.hostBase + "persona/";
  areaURL: string = this.loginService.hostBase + "area/";

  constructor(private _http: HttpClient,
              private loginService:LoginService) { }

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

    return this._http.get(this.areaURL + idArea, HttpOptions);
  }

  postArea(area: Area): Observable<any> {
    const HttpOptions = {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      }),
      params: new HttpParams()
    }
    const body = JSON.stringify(area);

    return this._http.post(this.areaURL ,body ,HttpOptions);
  }

  putArea(idArea: any, area: Area):Observable<any>{
    const HttpOptions = {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      }),
      params: new HttpParams()
    }
    const body = JSON.stringify(area);
    return this._http.put(this.areaURL + 'update/'+idArea,body,HttpOptions);
  }

  deleteArea(idArea: any):Observable<any>{
    const HttpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._http.delete(this.areaURL + idArea ,HttpOptions);
  }

  getAreas():Observable<any>{
    const HttpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._http.get(this.areaURL ,HttpOptions);
  }

  getAnuncionGenerales(tipo: any):Observable<any>{
    const HttpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams().append('tipo',tipo)
    }

    return this._http.get(this.areaURL + "general/"+tipo, HttpOptions);
  }

}
