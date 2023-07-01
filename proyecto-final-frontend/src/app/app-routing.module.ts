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


const routes: Routes = [
  { path:"", component:HomeComponent},
  { path:"home", component:HomeComponent},
  { path:"creacion-noticias", component:CreacionNoticiaComponent},
  { path:"login", component:LoginComponent},
  { path:"profesor", component:ProfesorComponent},
  { path:"alumno", component:AlumnoComponent},
  { path:"noticias", component:NoticiasComponent },
  {path:'roles', component:CreacionRolesComponent},
  {path:'areas', component:CreacionAreasComponent},
  
  { path:"**", pathMatch:'full', redirectTo:'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
