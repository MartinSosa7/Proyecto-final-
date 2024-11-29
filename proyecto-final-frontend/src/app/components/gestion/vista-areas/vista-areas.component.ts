import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anuncio } from 'src/app/models/anuncio';
import { Area } from 'src/app/models/area';
import { ServiciosAreaService } from 'src/app/services/servicios-area.service';

@Component({
  selector: 'vista-areas',
  templateUrl: './vista-areas.component.html',
  styleUrls: ['./vista-areas.component.css']
})
export class VistaAreasComponent implements OnInit {

  listaAreas: Array<Area>;
  AreaElegida:any;

  infoArea: Area;
  AnunciosAreaElegida: Array<Anuncio>;

  sessionStorage: Storage;
  PersonaActual:any;



  constructor(private servicios_area: ServiciosAreaService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.listaAreas = new Array<Area>();
    this.AnunciosAreaElegida = new Array<Anuncio>();
    this.infoArea = new Area();
    this.sessionStorage = sessionStorage;
  }

  ngOnInit(): void {
    this.listarAreas();
    this.activatedRoute.params.subscribe(
      (params)=>{
        if(params['idArea']=="0"){

        }
        else{
          this.cargarArea(params['idArea']);
        }
      }
    )
  }

  listarAreas(){
    this.servicios_area.getAreas().subscribe(
      result=>{
        var unArea = new Area();
        result.forEach((element:any)=>{
          Object.assign(unArea, element);
          this.listaAreas.push(unArea);
          unArea = new Area();
        })
      },
      error=>{
        console.log(error);
      }
    )
  }

  cargarArea(idArea:any){
    this.AnunciosAreaElegida = new Array<Anuncio>();
    this.infoArea = new Area();
    this.servicios_area.getArea(idArea).subscribe(
      result=>{
        Object.assign(this.infoArea,result);
        var unAnuncio = new Anuncio();
        result.anuncios.forEach((element:any)=>{
          Object.assign(unAnuncio, element);
          this.AnunciosAreaElegida.push(unAnuncio);
          unAnuncio = new Anuncio();
        }) 
        this.PersonaActual = result.responsables.find((persona:any) => persona._id === this.sessionStorage.getItem('userid'));
        console.log(this.PersonaActual);
      },
      error=>{
        console.log(error);
      }
    )
  }

  agregarAnuncio(idArea:any){
    this.router.navigate(['creacion-noticias',idArea,0])
  }

  verAnuncio(idArea:any, idAnuncio:any){
    this.router.navigate(['creacion-noticias',idArea,idAnuncio ])
  }


  getRandomClass(): string {
    const randomNumber = Math.floor(Math.random() * 8) + 1;
  
    switch (randomNumber) {
      case 1:
        return 'card-anuncio-1';
      case 2:
        return 'card-anuncio-2';
      case 3:
        return 'card-anuncio-3';
      case 4:
        return 'card-anuncio-4';
      case 5:
        return 'card-anuncio-5';
      case 6:
        return 'card-anuncio-6';
      case 7:
        return 'card-anuncio-7';
      case 8:
        return 'card-anuncio-8';
      default:
        return '';
    }
  }
  
  
}
