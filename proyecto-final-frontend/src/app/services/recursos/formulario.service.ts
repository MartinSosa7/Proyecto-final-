import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formulario } from 'src/app/models/formulario';
import { LoginService } from '../login.service';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {


  urlBase:string= this.loginService.hostBase + "formulario/";

  constructor(private http:HttpClient,
              private loginService :LoginService) { 

  }

  getFormulario(id:String):Observable<any>{

    const httpOption = {
      headers: new HttpHeaders({
      })
    }

    const body = new HttpParams()
    return this.http.get(this.urlBase + id ,httpOption);
  }

  getFormularios():Observable<any>{
    
    const httpOptions = {
      headers: new HttpHeaders({
      })
    }
    return this.http.get(this.urlBase ,httpOptions);
  }

  createFormulario(form:Formulario):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }) 
    }
    let body = JSON.stringify(form);
    console.log(body);
    return this.http.post(this.urlBase ,body ,httpOptions);
  }

  putFormulario(form: Formulario):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }) 
    }
    let body = JSON.stringify(form);
    return this.http.put(this.urlBase+'update/'+form._id,body,httpOptions);
  }

  deleteForm(form:Formulario):Observable<any>{
    const httpOption = {
      headers: new HttpHeaders({
      })
    }
    const body = new HttpParams()
    return this.http.delete(this.urlBase+'eliminar/'+form._id ,httpOption);
  }

}
