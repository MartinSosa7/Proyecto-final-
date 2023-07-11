import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Formulario } from 'src/app/models/formulario';
import { FormularioService } from 'src/app/services/recursos/formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  Archivos:Array<Formulario>;

  constructor(private formService:FormularioService,
              private router: Router,
              private sanitizer: DomSanitizer) { 
    this.Archivos = new Array<Formulario>();
  }

  ngOnInit(): void {
    this.cargarArchivos();
  }

  cargarArchivos(){
    this.formService.getFormularios().subscribe(
      result=>{
        var unArchivo = new Formulario();
        result.forEach((element:any)=>{
          Object.assign(unArchivo, element);
          this.Archivos.push(unArchivo);
          unArchivo = new Formulario();
        });
        console.log(this.Archivos);
        

      },
      error=>{
        console.log(error);
      }
    )
  }

  downloadFile(base64: string, filename: string) {
    const blob = this.base64ToBlob(base64);
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    
    link.click();
    
    // Clean up the URL object after the download is initiated
    URL.revokeObjectURL(url);
  }
  
  base64ToBlob(base64: string): Blob {
    const byteCharacters = atob(base64.split(',')[1]);
    const byteArrays = [];
    
    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    
    const blob = new Blob(byteArrays, { type: 'application/octet-stream' });
    return blob;
  }

  crearRecurso(){
    this.router.navigate(['newrecurso',0]);
  }

}
  
