import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Anuncio } from 'src/app/models/anuncio';
import { Area } from 'src/app/models/area';
import { ServiciosAreaService } from 'src/app/services/servicios-area.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaAreas:Array<Area>;
  anuncionsGenerales:Array<Anuncio>;
  idArea:any;
  constructor(private servicioArea: ServiciosAreaService, private router: Router) { 
    this.anuncionsGenerales = new Array<Anuncio>();
    this.listaAreas = new Array<Area>();
  }

  ngOnInit(): void {
    this.listarAreas();
  }

  listarAreas(){
    this.servicioArea.getAreas().subscribe(
      result=>{
        var unArea = new Area();
        result.forEach((element:any)=>{
          Object.assign(unArea, element);
          this.listaAreas.push(unArea);
          unArea = new Area();
        })
        var index:number = this.listaAreas.findIndex(area => (area.tipo == 'general' ))
        var idArea = this.listaAreas[index]._id;
        console.log(idArea);
        this.cargarArea(idArea);
      },
      error=>{
        console.log(error);
      }
    )
  }

  cargarArea(idArea:any){
    this.anuncionsGenerales = new Array<Anuncio>();
    // this.infoArea = new Area();
    this.servicioArea.getArea(idArea).subscribe(
      result=>{
        // Object.assign(this.infoArea,result);
        var unAnuncio = new Anuncio();
        result.anuncios.forEach((element:any)=>{
          Object.assign(unAnuncio, element);
          this.anuncionsGenerales.push(unAnuncio);
          unAnuncio = new Anuncio();
        }) 
        Object.assign(this.idArea, result._id);
      },
      error=>{
        console.log(error);
      }
    )
  }


  verAnuncio(idArea:any, idAnuncio:any){
    this.router.navigate(['creacion-noticias',idArea,idAnuncio ])
  }
  

}
