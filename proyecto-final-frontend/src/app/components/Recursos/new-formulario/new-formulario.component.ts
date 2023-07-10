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

    this.sub = this.actRouter.params.subscribe(
      params => {
        this.id = params['id']; 
        if (this.id.length != 0){
          this.formService.getFormulario(this.id).subscribe(
            result=>{
              this.form = result;
            },
            error=>{
              console.log('Error al cargar el Formulario')
            }
          )
        }
    });

  }

  guardarForm(f:Formulario) {
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

  volver(){
    this.router.navigate(['recurso']);
  }

  onFileSelected(event: any) {
   
      const file = event.target.files;
      const reader = new FileReader();
      reader.onload = () => {
        let base64 = reader.result as string;
        this.files.push({ 'base64': base64, 'id': this.files.length + 1, 'type': file.type, 'name': file.name });
      };
      reader.readAsDataURL(file);
  }

}
