import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprarComponent } from './comprar/comprar.component';
import { InicioComponent } from './inicio/inicio.component';
import { VenderComponent } from './vender/vender.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'comprar', component: ComprarComponent},
  {path:'vender', component: VenderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
