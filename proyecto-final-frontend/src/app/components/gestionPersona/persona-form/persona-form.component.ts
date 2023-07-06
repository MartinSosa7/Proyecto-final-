import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Area } from 'src/app/models/area';
import { Persona } from 'src/app/models/persona';
import { Rol } from 'src/app/models/rol';
import { AreaService } from 'src/app/services/area.service';
import { PersonaService } from 'src/app/services/persona.service';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.css']
})
export class PersonaFormComponent implements OnInit {

  accion: string = 'new';

  persona!: Persona;

  //area!:Area;
  areas: Array<Area> = new Array<Area>();

  rol!:Rol;
  roles: Array<Rol> = new Array<Rol>();
  rolSeleccionado: Rol = new Rol();
  rolAEliminar: Rol = new Rol();

  mensaje!: string;
  
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService,
              private personaService:PersonaService,
              private rolService:RolService,
              private areaService:AreaService) { 
              
  }


  iniciarPersona() {
      this.persona = new Persona();
      this.rol = new Rol();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params['id']=="0"){
        this.accion= "new";
        this.iniciarPersona();
        this.cargarAreas();
        //this.cargarRoles();
        
      }else{
        this.accion= "update";
        //this.cargarAreas();
        this.cargarRoles();
        this.iniciarPersona();
        this.cargarPersona(params['id']);

      }
    })
  }

  regresar(){
    this.router.navigate(['persona-list']);
  }

  async cargarPersona(id:string){
    await this.cargarAreas();
    this.persona=new Persona();

    this.personaService.getPersona(id).subscribe(
     (result)=>{
      console.log(result);
      var roles = new Array<Rol>();
      result.roles.forEach((arol: any) => {
        var rol = new Rol();
        Object.assign(rol, arol);
        roles.push(rol);
      });
      this.persona.roles = roles;
      Object.assign(this.persona, result);
      this.persona.area = this.areas.find((item) => (item._id == this.persona.area._id))!;
     
     
    });
  }

  guardarPersona(personaForm:NgForm){
    var dni = this.persona.dni.toString();
    this.persona.dni = dni;

    this.personaService.createPersona(this.persona).subscribe(
      (result)=>{
        if(result.status=="1"){
          //alert(result.msg);
          this.toastr.success("Persona guardado exitosamente","Gestion de Persona");
          this.router.navigate(['persona-list']);
          personaForm.reset();
        }
        if (result.status == '2') {
          this.toastr.error(result.msg, 'Error');
          this.persona.dni = '';
        }
      },
      (error)=>{
        if(error.status=="0"){
          this.toastr.error(error.msg,"Gestion de Persona");
          //alert(error.msg);
        }
      }
    )
  }

  actualizarPersona(personaForm: NgForm) {
    this.personaService.updatePersona(this.persona).subscribe(
      (result) => {
        if(result.status=="1"){
          this.toastr.success("Se actualizaron los datos correctamente", "Gestion de Personas"); 
          this.router.navigate(['persona-list']);
        }
      },
      (error) => {
        if(error.status=="0"){
          this.toastr.error(error.msg, 'Error');
          //alert(error.msg);
        }
      }
    );
  }

  cargarRoles() {
    this.roles = new Array<Rol>();
    this.rolService.getRoles().subscribe((result) => {
      result.forEach((item: any) => {
        var unRol = new Rol();
        Object.assign(unRol, item);
        this.roles.push(unRol);
        unRol = new Rol();
      });
      console.log(this.roles);
    });
  }

  
  async cargarAreas() {
    this.areas = new Array<Area>();
    this.areaService.getAreas().subscribe(
    (result) => {
      var unArea = new Area();
      result.forEach((element: any) => {
        Object.assign(unArea, element);
        this.areas.push(unArea);
        unArea = new Area();
      });
      console.log(this.areas);
    },
    (error)=>{
      console.log(error);
    }
   )
  }
    
  guardarRol() {
    this.personaService.addRol(this.rol, this.persona._id).subscribe(
        (result:any) => {
          if(result.status==1){
            console.log(result);
            this.toastr.success('Se asignó un rol a '+this.persona.nombre,'Gestion de Personas');
            this.cargarPersona(this.persona._id);
          }
         
        },
        (error) => {
          alert(error.msg);
        }
      );
  } 


  eliminarRol(rol:Rol) {
    this.personaService.deleteRol(this.persona._id,rol).subscribe(
      (result:any) => {
        if(result.status==1){
          console.log(result);
          this.toastr.success('Rol Eliminado','Gestion de Personas');
          this.cargarPersona(this.persona._id);
        }
      },
      (error) => {
        alert(error.msg);
      }
    );
  }
  
}
