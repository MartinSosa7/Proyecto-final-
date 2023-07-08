import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';

import { CreacionNoticiaComponent } from './components/creacion-noticia/creacion-noticia.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/layout/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { ProfesorComponent } from './components/Persona/profesor/profesor.component';
import { AlumnoComponent } from './components/Persona/alumno/alumno.component';
import { FormularioComponent } from './components/Recursos/formulario/formulario.component';
import { NewFormularioComponent } from './components/Recursos/new-formulario/new-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    CreacionNoticiaComponent,
    HeaderComponent,
    FooterComponent,

    HomeComponent,
    LoginComponent,
    ProfesorComponent,
    AlumnoComponent,
    FormularioComponent,
    NewFormularioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    HttpClientModule,
    EditorModule,
    ReactiveFormsModule,
  ],
 

   
  
  providers: [
    LoginService,
    {provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
