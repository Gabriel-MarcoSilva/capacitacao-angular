import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component"

const routes: Routes = [
 // {path: '', recirectTo: 'arquivo'}
  {path: '', component: LoginComponent},
  {path:'dashboard', loadChildren:() => import('./components/dashboard/dashboard.module').then((m) => m.DashboardModule)}
  //pra não carregar todos os modulos de vez; carrega os modulos sobre demanda
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
