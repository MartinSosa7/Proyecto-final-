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
    const element = document.createElement('a');
    element.href = base64;
  
    // Set the correct file extension based on the file type
    const fileType = filename.split('.').pop();
    if (fileType === 'vnd.openxmlformats-officedocument.wordprocessingml.document') {
      filename += '.docx';
    }
  
    element.download = filename;
    element.click();
  }
  
}
