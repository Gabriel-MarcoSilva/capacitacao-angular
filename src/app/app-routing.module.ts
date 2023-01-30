import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component"
import { AuthGuardService } from './resources/services/auth-guard.service';

const routes: Routes = [
 // {path: '', recirectTo: 'arquivo'}
  {path: '', component: LoginComponent},
  {path:
    'dashboard',
    canActivate: [AuthGuardService],
    loadChildren:() => import('./components/dashboard/dashboard.module').then((m) => m.DashboardModule)},
  //pra não carregar todos os modulos de vez; carrega os modulos sobre demanda
  {path:"**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
