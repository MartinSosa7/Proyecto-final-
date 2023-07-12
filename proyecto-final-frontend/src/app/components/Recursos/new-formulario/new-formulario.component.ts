import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Formulario } from 'src/app/models/formulario';
import { Rol } from 'src/app/models/rol';
import { FormularioService } from 'src/app/services/recursos/formulario.service';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-new-formulario',
  templateUrl: './new-formulario.component.html',
  styleUrls: ['./new-formulario.component.css']
})
export class NewFormularioComponent implements OnInit {
  @ViewChild('exampleModal', { static: false }) modal: ElementRef<any> | undefined;


  form:Formulario;
  id:string;
  date!:Date;
  accion!:string;
  sessionStorage: Storage;


  editorConfig = {
    suffix: '.min',
    plugins: 'lists link image table wordcount'
  }

  files: { base64: string,  id: number, type: string, name:string }[] = [];
  Contenido = '';


  constructor(private formService:FormularioService,
              private router : Router,
              private actRouter : ActivatedRoute) {
  
  this.form  = new Formulario();
  this.id    = ''; 
  this.sessionStorage = sessionStorage;
  }

  ngOnInit(): void {

    this.actRouter.params.subscribe(
      params => {
        if(params['id']=="0"){
          this.accion = 'new';
        }
        else{
          this.accion = 'update';
          this.cargarForm(params['id']);
        }
    });

  }

  //MODULOS DE ACCIONES DE BOTONES
  guardarForm(f:Formulario) {
    
    this.date = new Date();
     this.form.fecha = this.date.toLocaleDateString();
    this.form.archivos = this.files.map(file=>{return {base64:file.base64, type:file.type, name:file.name}});
    this.formService.createFormulario(f).subscribe(
      result=>{
        this.form = new Formulario();
        alert('Formulario guardado');
        this.volver();
      },
      error=>{
        console.log(error);
      }
    )
  }

  cargarForm(idForm:any){
    this.formService.getFormulario(idForm).subscribe(
      result=>{
        Object.assign(this.form,result);
        Object.assign(this.files, result.archivos);
      },
      error=>{
        console.log(error);
      }
    )
  }  

  modificarForm(form:Formulario){
    this.formService.putFormulario(form).subscribe(
      result=>{
        alert(result.msg);
      },
      error=>{
        console.log(error);
      }
    )
  }

  EliminarForm(form:Formulario){
    this.formService.deleteForm(form).subscribe(
      result=>{
        alert(result.msg);
        this.closeModal();
        this.router.navigate(['recurso'])
      },
      error=>{
        console.log(error);
      }
    )
  }




  volver(){
    this.router.navigate(['recurso']);
  }
  

//MODULOS DE LA ENTRADA DE ARCHIVOS

  onFileSelected(event: any) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = () => {
        let base64 = reader.result as string;
        this.files.push({ 'base64': base64, 'id': this.files.length + 1, 'type': file.type, 'name': file.name });
      };
      reader.readAsDataURL(file);
    }
  }


  eliminarArchivo(id: number) {
    const index = this.files.findIndex(t => t.id === id);
    if (index != -1) {
      this.files.splice(index, 1);
      this.files.forEach((file, index) => file.id = index + 1);
    }
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

  closeModal() {
    if (this.modal && this.modal.nativeElement) {
      const modalElement: HTMLElement = this.modal.nativeElement;
      modalElement.classList.remove('show');
      modalElement.style.display = 'none';
      const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
      if (modalBackdrop) {
        modalBackdrop.parentNode?.removeChild(modalBackdrop);
      }
    }
  }

}
