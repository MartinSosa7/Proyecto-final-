import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';

import { CreacionNoticiaComponent } from './components/creacion-noticia/creacion-noticia.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/layout/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { ProfesorComponent } from './components/Persona/profesor/profesor.component';
import { AlumnoComponent } from './components/Persona/alumno/alumno.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { CreacionRolesComponent } from './components/gestion/creacion-roles/creacion-roles.component';
import { CreacionAreasComponent } from './components/gestion/creacion-areas/creacion-areas.component';
import { VistaAreasComponent } from './components/gestion/vista-areas/vista-areas.component';
import { PersonaListComponent } from './components/gestionPersona/persona-list/persona-list.component';
import { PersonaFormComponent } from './components/gestionPersona/persona-form/persona-form.component';
import { FormularioComponent } from './components/Recursos/formulario/formulario.component';
import { NewFormularioComponent } from './components/Recursos/new-formulario/new-formulario.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { CalendarComponent } from './components/calendar/calendar/calendar.component';
// importamos la librería HTTP_INTERCEPTOR
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ListaAreasComponent } from './components/gestion/lista-areas/lista-areas.component';
import { QuillModule } from 'ngx-quill';
import { MapaComponent } from './components/mapa/mapa.component';

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
    NoticiasComponent,
    CreacionRolesComponent,
    CreacionAreasComponent,
    VistaAreasComponent,
    PersonaListComponent,
    PersonaFormComponent,
    FormularioComponent,
    NewFormularioComponent,
    CalendarComponent,
    ListaAreasComponent,
    MapaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    HttpClientModule,
    EditorModule,
    OAuthModule.forRoot(),

    QuillModule,

    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    
  ],
 

   
  
  providers: [
    LoginService,
    {provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
     }
     

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
