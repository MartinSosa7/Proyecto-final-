import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Area } from 'src/app/models/area';
import { Persona } from 'src/app/models/persona';
import { Rol } from 'src/app/models/rol';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {
  @ViewChild('exampleModal', { static: false }) modal: ElementRef<any> | undefined;


  personas!:Array<Persona>;
  persona:Persona = new Persona();
  personaDni:Persona= new Persona();
  personaPorEliminar:Persona = new Persona();

  rol:Rol=new Rol();
  area:Area=new Area();
  
  constructor(private router:Router,
              private personaService:PersonaService,
              private toastr: ToastrService,
             ) { 
    this.inicializar();
    this.cargarPersonas();

  }

  inicializar(){
    this.personas= new Array<Persona>();
    this.personaDni= new Persona();
  }

  cargarPersonas(){
    this.personas=new Array <Persona>();
    this.personaService.getPersonas().subscribe(
      (result) =>{
        console.log(result);
        var unaPersona = new Persona();
        result.forEach((element:any) => {
          Object.assign(unaPersona,element);
          this.personas.push(unaPersona);
          unaPersona = new Persona();
        });
      },
      (error) => {
        console.log(error);
      }
    )
  }  
 

  agregarPersona(){
    this.router.navigate(["persona-form", 0])
  }

  modificarPersona(persona:Persona){
    this.router.navigate(["persona-form", persona._id]);
  }

  borrarPersona(persona:Persona){
    this.personaService.deletePersona(persona._id).subscribe(
      (result)=>{
        if(result.status="1"){
          console.log(result.msg);
          this.closeModal();
          this.cargarPersonas();
          this.toastr.success("Persona eliminado/a correctamente","Baja de Persona");
        }
      },
      (error)=>{
        if(error.status="0")
        //console.log(error.msg);
        this.toastr.error(error.msg,"Baja de Persona");
      }
    )
  }

  fitrarByDni(){
    this.personas= new Array<Persona>();
    this.personaService.getPersonaByDni(this.personaDni.dni).subscribe(
      (result)=>{
        if (result.length!=0){
          var unapersona = new Persona();
          var unarea =  new Area();
          Object.assign(unapersona,result);
          this.personas.push(unapersona);

          
          console.log(this.personas);  
        }else{
          this.toastr.error("La persona con dni "+this.personaDni.dni+" no se encuentra registrado","Busqueda");
          this.cargarPersonas();
        }
      },
      (error)=>{
        console.log(error.msg);

      }
    )

  }



  ngOnInit(): void {
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

  setPersonaPorEliminar(persona: Persona){
    this.personaPorEliminar = persona;
  }

}

