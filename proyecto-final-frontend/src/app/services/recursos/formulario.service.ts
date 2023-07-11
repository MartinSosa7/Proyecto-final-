import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formulario } from 'src/app/models/formulario';
import { LoginService } from '../login.service';

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
    
    const httpOption = {
      headers: new HttpHeaders({
      })
    }
    const body = new HttpParams()
    return this.http.get(this.urlBase ,httpOption);
  }

  createFormulario(form:Formulario,file:File):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }) 
    }
    var form2 = this.uploadFile(form,file)
    let body = JSON.stringify(form2);
    console.log(body);
    return this.http.post(this.urlBase ,body ,httpOptions);
  }

  uploadFile(form:Formulario ,file: File):Formulario {
   
    // form.archivo.push({'file', file ,file.name});
    return form;
  }
}
