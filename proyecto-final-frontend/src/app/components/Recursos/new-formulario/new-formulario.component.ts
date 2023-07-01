import { Component, OnInit } from '@angular/core';
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

  constructor(private formService:FormularioService,
              private rolService:RolService) {

  this.roles = new Array<Rol>();
  // if (__param._id == '')
  this.form = new Formulario();

  this.cargarRoles();

  }

  ngOnInit(): void {
  }

  cargarRoles(){
    this.rolService.getRoles().subscribe(
      result=>{
        this.roles = result;
        if (this.roles.length <= 0) {
          alert('Debe crear Roles para poder crear un nuevo formulario');
        }
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
      },
      error=>{
        console.log(error);
      }
    )
  }
}
