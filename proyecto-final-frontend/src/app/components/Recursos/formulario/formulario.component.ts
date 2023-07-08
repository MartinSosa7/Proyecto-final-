import { Component, OnInit } from '@angular/core';
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

  constructor(private formService:FormularioService,
              private router: Router) { 
    this.forms = new Array<Formulario>();
    this.cargarForms();
  }

  ngOnInit(): void {
    this.cargarForms();
  }

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

}
