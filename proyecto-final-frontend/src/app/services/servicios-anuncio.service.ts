import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Anuncio } from '../models/anuncio';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class ServiciosAnuncioService {

  baseurl:string = this.loginService.hostBase + "area";

  constructor(private _http: HttpClient,
              private loginService:LoginService) { }

  postAnuncio(anuncio: Anuncio, idArea:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type':'application/json'

      }),
      params: new HttpParams()
    }
    const body = JSON.stringify(anuncio);

    return this._http.post(this.baseurl+'/anuncio/'+idArea,body,httpOptions);
  }

  getAnuncio(idArea:any, idAnuncio:any):Observable<any>{
    const HttpOptions = {
      headers: new HttpHeaders({


      }),
      params: new HttpParams()
    }

    return this._http.get(this.baseurl+'/area/'+idArea+'/anuncio/'+idAnuncio,HttpOptions);
  }

  putAnuncio(idArea:any, idAnuncio:any, Anuncio:Anuncio):Observable<any>{
    const HttpOptions = {
      headers: new HttpHeaders({
        'Content-type':'application/json'

      }),
      params: new HttpParams()
    }
    const body = JSON.stringify(Anuncio);

    return this._http.put(this.baseurl+'/area/'+idArea+'/anuncio/'+idAnuncio,body,HttpOptions);

  }

  deleteAnuncio(idArea:any, idAnuncio:any):Observable<any>{
    const HttpOptions = {
      headers: new HttpHeaders({
        
      }),
      params: new HttpParams()
    }

    return this._http.delete(this.baseurl+'/area/'+idArea+'/anuncio/'+idAnuncio,HttpOptions);
  }

}
