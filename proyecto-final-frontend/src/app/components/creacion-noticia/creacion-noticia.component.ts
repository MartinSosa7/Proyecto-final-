import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'creacion-noticia',
  templateUrl: './creacion-noticia.component.html',
  styleUrls: ['./creacion-noticia.component.css']
})
export class CreacionNoticiaComponent implements OnInit {

  editorConfig = {
    base_url: '/tinymce',
    suffix: '.min',
    plugins: 'lists link image table wordcount'
  }

  files: { base64: string, safeurl: SafeUrl, id: number, type: string }[] = [];
  Contenido = '';

  constructor(private sanitizer: DomSanitizer) {
    this.Contenido = '';
  }

  ngOnInit(): void {
  }

  contenido() {
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

  onFileSelected(event: any) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = () => {
        let base64 = reader.result as string;
        const fileType = file.type;
        this.files.push({ 'base64': base64, 'id': this.files.length + 1, 'type': file.type, 'safeurl': this.sanitizeUrl(base64) });
      };
      reader.readAsDataURL(file);
    }
  }

  sanitizeUrl(base64: string): SafeUrl {
    const safeUrl = this.sanitizer.bypassSecurityTrustUrl(base64);
    return safeUrl;
  }

  eliminarArchivo(id: number) {
    const index = this.files.findIndex(t => t.id === id);
    if (index != -1) {
      this.files.splice(index, 1);
      this.files.forEach((file, index) => file.id = index + 1);
    }
  }

  downloadFile(base64: string, filename: string) {
    const blob = this.base64ToBlob(base64);
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    
    link.click();
    
    // Clean up the URL object after the download is initiated
    URL.revokeObjectURL(url);
  }
  
  base64ToBlob(base64: string): Blob {
    const byteCharacters = atob(base64.split(',')[1]);
    const byteArrays = [];
    
    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    
    const blob = new Blob(byteArrays, { type: 'application/octet-stream' });
    return blob;
  }
  
}
