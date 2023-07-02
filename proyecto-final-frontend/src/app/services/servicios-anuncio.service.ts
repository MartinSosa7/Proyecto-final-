import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Anuncio } from '../models/anuncio';
@Injectable({
  providedIn: 'root'
})
export class ServiciosAnuncioService {

  constructor(private _http: HttpClient) { }

  baseurl: string = 'http://localhost:3000/api/anuncio';

  postAnuncio(anuncio: Anuncio):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type':'application/json'

      }),
      params: new HttpParams()
    }
    const body = JSON.stringify(anuncio);

    return this._http.post(this.baseurl,body,httpOptions);
  }

}
