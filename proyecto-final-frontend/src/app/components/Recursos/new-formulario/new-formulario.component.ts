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

  roles:Array<Rol>;
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
              private rolService:RolService,
              private router : Router,
              private actRouter : ActivatedRoute,
              private sanitizer: DomSanitizer) {
  

  this.roles = new Array<Rol>();
  this.form  = new Formulario();
  this.id    = ''; 

  // this.cargarRoles();

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

  cargarRoles(){
    this.rolService.getRoles().subscribe(
      result=>{
        this.roles = result;
        // if (this.roles.length <= 0) {
        //   alert('Debe crear Roles para poder crear un nuevo formulario');
        // }
      },
      error=>{
        console.log(error);
      }
    )
  }

  getResultado(): Array<Rol> {
    return this.roles.filter(item => item.checked);
  }

  changeCheckbox(event: Event) {
    console.log(event.target);
  }

  guardarForm(f:Formulario) {
    f.mostrarPara = this.getResultado();
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
  
  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  onFileSelected(event: any) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = () => {
        let base64 = reader.result as string;
        const fileType = file.type;
        this.files.push({ 'base64': base64, 'id': this.files.length + 1, 'type': file.type, 'safeurl': this.sanitizeUrl(base64) });
      };
      reader.readAsDataURL(file);
    }
  }

  sanitizeUrl(base64: string): SafeUrl {
    const safeUrl = this.sanitizer.bypassSecurityTrustUrl(base64);
    return safeUrl;
  }


}
