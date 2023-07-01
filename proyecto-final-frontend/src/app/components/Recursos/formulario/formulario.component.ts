import { Component, OnInit } from '@angular/core';
import { Formulario } from 'src/app/models/formulario';
import { FormularioService } from 'src/app/services/recursos/formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  forms = Array<Formulario>();

  constructor(private formService:FormularioService) { 
    this.forms = new Array<Formulario>();
    this.cargarForms();
  }

  ngOnInit(): void {
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

  verForm(f:Formulario){
    
  }

}
