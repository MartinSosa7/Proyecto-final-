import { Component, OnInit } from '@angular/core';
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

  form:Formulario;
  id:string;
  private sub: any;

  editorConfig = {
    suffix: '.min',
    plugins: 'lists link image table wordcount'
  }

  files: { base64: string, safeurl: SafeUrl, id: number, type: string }[] = [];
  Contenido = '';


  constructor(private formService:FormularioService,
              private router : Router,
              private actRouter : ActivatedRoute,
              private sanitizer: DomSanitizer) {
  
  this.form  = new Formulario();
  this.id    = ''; 

  }

  ngOnInit(): void {

    // this.sub = this.actRouter.params.subscribe(
    //   params => {
    //     this.id = params['id']; 
    //     if (this.id.length != 0){
    //       this.formService.getFormulario(this.id).subscribe(
    //         result=>{
    //           this.form = result;
    //         },
    //         error=>{
    //           console.log('Error al cargar el Formulario')
    //         }
    //       )
    //     }
    // });

  }

  volver(){
    this.router.navigate(['recurso']);
  }

  selectedFile: File | null = null;

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
    }
  }

  guardarForm(f:Formulario) {
    if (this.selectedFile){
      this.formService.createFormulario(f ,this.selectedFile).subscribe(
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
  }

}
