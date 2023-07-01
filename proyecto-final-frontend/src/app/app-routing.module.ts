import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/layout/home/home.component';
import { CreacionNoticiaComponent } from './components/creacion-noticia/creacion-noticia.component';
import { LoginComponent } from './components/login/login.component';
import { ProfesorComponent } from './components/Persona/profesor/profesor.component';
import { AlumnoComponent } from './components/Persona/alumno/alumno.component';
import { FormularioComponent } from './components/Recursos/formulario/formulario.component';
import { NewFormularioComponent } from './components/Recursos/new-formulario/new-formulario.component';


const routes: Routes = [
  { path:"", component:HomeComponent},
  { path:"home", component:HomeComponent},
  { path:"creacion-noticias", component:CreacionNoticiaComponent},
  { path:"login", component:LoginComponent},
  { path:"profesor", component:ProfesorComponent},
  { path:"alumno", component:AlumnoComponent},
  { path:"recurso", component:FormularioComponent},
  { path:"newrecurso", component:NewFormularioComponent},

  { path:"**", pathMatch:'full', redirectTo:'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
