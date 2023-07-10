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

  forms = Array<Formulario>();
  form  = new Formulario();
  files: { base64: string,  id: number, type: string, name:string }[] = [];

  constructor(private formService:FormularioService,
              private router: Router,
              private sanitizer: DomSanitizer) { 
    this.forms = new Array<Formulario>();
    this.form = new Formulario();
    this.cargarForms();
    this.files = [];
  }

  ngOnInit(): void {
    this.cargarForms();
  }

  // onFileSelected(event: any) {
  //     const file = this.form.archivo;
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       let base64 = reader.result as string;
  //       this.files.push({ 'base64': base64, 'id': this.files.length + 1, 'type': file.type, 'name': file.name });
  //     };
  //     reader.readAsDataURL(file);
  // }

  cargarForms(){
    this.formService.getFormularios().subscribe(
      result => {
        this.forms = result;
      },
      error=>{
        console.log(error);
      }
    )

  }

  modificarForm(f:Formulario){
    this.router.navigate(['newrecurso', f._id]);
  }

  crearNuevo(){
    this.router.navigate(['newrecurso', '0']);
  }

  downloadFile(filename: string) {
    const blob = this.base64ToBlob('base64');
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
}
