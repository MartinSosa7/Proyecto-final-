import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/layout/home/home.component';
import { CreacionNoticiaComponent } from './components/creacion-noticia/creacion-noticia.component';

const routes: Routes = [
  { path:"home", component:HomeComponent},
  { path:"creacion-noticias", component:CreacionNoticiaComponent},

  { path:"**", pathMatch:'full', redirectTo:'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
