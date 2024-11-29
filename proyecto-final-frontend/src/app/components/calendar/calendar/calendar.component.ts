import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GooService } from 'src/app/services/goo.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  sessionStorage: Storage;

  calendarioGoogle:any=null;
  idCalendario:string = "585a5fe1d81316ad6cc68880b1e88fba1b038e1167a87b830c24b38134d0b050@group.calendar.google.com"; //reemplazar por el id de un calendario compartido en ppio como publico
  
  resultados:Array<any> = new Array <any>();

  fromDate: string="";
  toDate: string="";
  event:any=
  {
    
    kind: "calendar#event",
    status: "confirmed",
    summary: " ",
    creator: {
        "email": "escuelageneralsavio119@gmail.com"
    },

    start: {
        dateTime: "2023-07-08T18:25:00-03:00",
        timeZone: "America/Argentina/Jujuy"
    },

    end: {
        dateTime: "2023-07-08T23:30:00-03:00",
        timeZone: "America/Argentina/Jujuy"
    }
}


  constructor(private gooService: GooService,
              private toastr: ToastrService) { 
  
  this.sessionStorage = sessionStorage;
  }

  ngOnInit(): void {
    this.gooService.configureSingleSignOne();

  }

  login(){
    this.gooService.login()

  }
  
  logout(){
    this.gooService.logout();
  }

  verEventos(){
    idCalendario:String;
    this.gooService.getEvents(this.idCalendario).subscribe(
      result=>{
        this.calendarioGoogle = result.items;
        alert(JSON.stringify(this.calendarioGoogle))
      },
      error=>{
        console.log(error)
      }
    )
  } 


  crearEvento(){

    let fechafrom:Date = new Date(this.fromDate);
    let fechato:Date = new Date(this.toDate);
    this.event.start.dateTime = this.toIsoString(fechafrom); 
    this.event.end.dateTime = this.toIsoString(fechato);

    //pasamos por ahora el JSON event en forma estática
    this.gooService.createEvent(this.idCalendario, this.event).subscribe(
      result=>{
        console.log(result);
        this.toastr.success("Se ha creado exitosamente!","Creacion de Evento");

      },
      error=>{
        console.log(error);
      }
    )
  }

  //METODO interno que se utiliza para obtener el formato
  //que se requiere en la API de google Calendar. Ej. 2022-06-20T17:04:00-03:00
  toIsoString(date:Date) {
    var tzo = -date.getTimezoneOffset(),
        dif = tzo >= 0 ? '+' : '-',
        pad = function(num:any) {
            return (num < 10 ? '0' : '') + num;
        };
  
    return date.getFullYear() +
        '-' + pad(date.getMonth() + 1) +
        '-' + pad(date.getDate()) +
        'T' + pad(date.getHours()) +
        ':' + pad(date.getMinutes()) +
        ':' + pad(date.getSeconds()) +
        dif + pad(Math.floor(Math.abs(tzo) / 60)) +
        ':' + pad(Math.abs(tzo) % 60);
  }

  token(){
    console.log(this.gooService.getToken());
    alert(this.gooService.getToken())
  }

  getEventos(){
    this.gooService.getEvents(this.idCalendario).subscribe(
      result=>{
        this.resultados = result.items;
        //alert(JSON.stringify(this.calendarioGoogle))
      },
      error=>{
        console.log(error)
      }
    )
  }
  
  

}
