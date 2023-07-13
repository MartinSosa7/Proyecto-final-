import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/layout/home/home.component';
import { CreacionNoticiaComponent } from './components/creacion-noticia/creacion-noticia.component';
import { LoginComponent } from './components/login/login.component';
import { ProfesorComponent } from './components/Persona/profesor/profesor.component';
import { AlumnoComponent } from './components/Persona/alumno/alumno.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { CreacionRolesComponent } from './components/gestion/creacion-roles/creacion-roles.component';
import { CreacionAreasComponent } from './components/gestion/creacion-areas/creacion-areas.component';
import { PersonaFormComponent } from './components/gestionPersona/persona-form/persona-form.component';
import { PersonaListComponent } from './components/gestionPersona/persona-list/persona-list.component';
import { VistaAreasComponent } from './components/gestion/vista-areas/vista-areas.component';
import { NewFormularioComponent } from './components/Recursos/new-formulario/new-formulario.component';
import { FormularioComponent } from './components/Recursos/formulario/formulario.component';
import { CalendarComponent } from './components/calendar/calendar/calendar.component';
import { ListaAreasComponent } from './components/gestion/lista-areas/lista-areas.component';
import { MapaComponent } from './components/mapa/mapa.component';


const routes: Routes = [
  { path:"home", component:HomeComponent},
  { path:"creacion-noticias/:idArea/:idAnuncio", component:CreacionNoticiaComponent},
  { path: "creacion-areas/:idArea", component: CreacionAreasComponent },
  { path: "vista-areas/:idArea", component:VistaAreasComponent},
  { path:"login", component:LoginComponent},
  { path:"profesor", component:ProfesorComponent},
  { path:"alumno", component:AlumnoComponent},
  { path:"noticias", component:NoticiasComponent },
  {path:'roles', component:CreacionRolesComponent},
  {path:'persona-form/:id', component:PersonaFormComponent},
  {path:'persona-list', component:PersonaListComponent},
  {path:'newrecurso/:id', component:NewFormularioComponent},
  {path:'recurso', component:FormularioComponent},
  {path:'calendar', component: CalendarComponent},
  {path:'lista-areas',component: ListaAreasComponent}, 
  {path:'mapa',component: MapaComponent}, 
  
  { path:"**", pathMatch:'full', redirectTo:'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
