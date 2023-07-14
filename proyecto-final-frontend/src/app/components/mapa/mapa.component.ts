import { Component, OnInit } from '@angular/core';
declare const L: any;
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    let map = L.map('map').setView([-24.2568976, -65.2097647], 17);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  
    let marker = L.marker([-24.2568927, -65.2074000]).addTo(map);
    marker.bindPopup('<b>Escuela Primaria Nº 119</b>').openPopup();
  }

}
