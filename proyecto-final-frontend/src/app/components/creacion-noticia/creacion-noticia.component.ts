import { Component, OnInit, ElementRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'creacion-noticia',
  templateUrl: './creacion-noticia.component.html',
  styleUrls: ['./creacion-noticia.component.css']
})
export class CreacionNoticiaComponent implements OnInit {

  Contenido = '';

  constructor(private sanitizer: DomSanitizer, private elementRef: ElementRef) {
    this.Contenido = '';
   }

  ngOnInit(): void {
  }

  contenido(){
    
    const tempElement = document.createElement('div');
    tempElement.innerHTML = this.Contenido;

    const tableElement: HTMLElement = tempElement.querySelector('table')!;

    if (tableElement) {
      const clonedTableElement = tableElement.cloneNode(true) as HTMLElement;
      if (tableElement.parentNode) {
        tableElement.parentNode.replaceChild(clonedTableElement, tableElement);
      }

      clonedTableElement.classList.add('table', 'table-bordered', 'table-striped');
    }

    // Get the modified HTML string
    this.Contenido = tempElement.innerHTML;
    console.log(this.Contenido);
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
