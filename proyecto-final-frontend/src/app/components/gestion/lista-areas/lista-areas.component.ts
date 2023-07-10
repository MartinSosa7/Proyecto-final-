import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Area } from 'src/app/models/area';
import { ServiciosAreaService } from 'src/app/services/servicios-area.service';

@Component({
  selector: 'app-lista-areas',
  templateUrl: './lista-areas.component.html',
  styleUrls: ['./lista-areas.component.css']
})
export class ListaAreasComponent implements OnInit {

  listaDeAreas: Array<Area>;

  constructor(private servicios_areas: ServiciosAreaService, private router: Router) {
    this.listaDeAreas = new Array<Area>();
   }

  ngOnInit(): void {
    this.cargarAreas();
  }

  cargarAreas(){
    this.listaDeAreas = new Array<Area>();
    this.servicios_areas.getAreas().subscribe(
      result=>{
        var unArea = new Area();
        result.forEach((element:any) => {
          Object.assign(unArea,element);
          this.listaDeAreas.push(unArea);
          unArea = new Area();
        });
      },
      error=>{
        console.log(error);
      }
    )
  }

  crearArea(){
    this.router.navigate(['creacion-areas',0]);
  }

  modificarArea(id:any){
    this.router.navigate(['creacion-areas',id]);
  }

  verArea(titulo: string){
    sessionStorage.setItem("areaActual", titulo );
    this.router.navigate(['vista-areas']);
    
  }

}
