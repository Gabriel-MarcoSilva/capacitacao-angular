import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlossarioComponent } from './components/glossario/glossario.component';
import { ListaGlossarioComponent } from './components/lista-glossario/lista-glossario.component';
//import { AuthGuardService } from './resources/services/auth-guard.service';

const routes: Routes = [
 // {path: '', recirectTo: 'arquivo'}
  /*{path:
    'dashboard',
    canActivate: [AuthGuardService],
    loadChildren:() => import('./components/dashboard/dashboard.module').then((m) => m.DashboardModule)},
  //pra não carregar todos os modulos de vez; carrega os modulos sobre demanda
  {path:"**", redirectTo: ""}*/

  {path: "", component: ListaGlossarioComponent},
  {path: "glossario/:id", component: GlossarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
