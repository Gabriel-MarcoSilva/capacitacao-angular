import { Component } from '@angular/core';
import { LoginService } from 'src/app/resources/services/login.service';
import { AlertService } from 'src/app/resources/services/alert.service';
import { RequestLogin } from "../../resources/models/RequestLogin"
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //em angular para colocar os dados nas variaveis que serão enviadas usa-se o ngModels e two way databiding
  // [(ngModel)] = "nome_do_item_que_será_armazenado"
  //para funcionar precisa do FormsModule

  constructor (
    private loginService: LoginService, 
    private alertService:AlertService,
    private router: Router
  ){ }

  public requestLogin!: RequestLogin;

  image =  "../../../assets/car.png"

  ngOnInit(){
    this.requestLogin = new RequestLogin()
  }

  doLogin(){
    this.loginService.doLogin(this.requestLogin).subscribe((data) =>{
      this.router.navigate(['dashboard'])
    },
    (err) =>{
      this.alertService.errorAlert(err.error.message, "erro")
    }
    )
  }

}
