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




const routes: Routes = [
  { path:"", component:HomeComponent},
  { path:"home", component:HomeComponent},
  { path:"creacion-noticias/:idArea/:idAnuncio", component:CreacionNoticiaComponent},
  { path: "creacion-areas/:idArea", component: CreacionAreasComponent },
  { path: "vista-areas", component:VistaAreasComponent},
  { path:"login", component:LoginComponent},
  { path:"profesor", component:ProfesorComponent},
  { path:"alumno", component:AlumnoComponent},
  { path:"noticias", component:NoticiasComponent },
  {path:'roles', component:CreacionRolesComponent},
  {path:'areas', component:CreacionAreasComponent},
  {path:'persona-form/:id', component:PersonaFormComponent},
  {path:'persona-list', component:PersonaListComponent},
  
  
  { path:"**", pathMatch:'full', redirectTo:'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
