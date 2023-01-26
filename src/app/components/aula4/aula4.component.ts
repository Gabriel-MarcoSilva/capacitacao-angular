import { Component } from '@angular/core';

@Component({
  selector: 'app-aula4',
  templateUrl: './aula4.component.html',
  styleUrls: ['./aula4.component.css']
})
export class Aula4Component {
//if
  email: string = "teste@test.com"
  emailSubmit: boolean = false
  email2: string = "teste@test.com"
  emailSubmit2: boolean = false

//for
  produtos: string[] = ["soda", "limonada", "gostosa", "geladinha"]

//style
  Cor: string = "gray"

//if
  onSubmit(){
    this.emailSubmit = true
  }

  tradeEmail(e:any){
    this.email = (<HTMLInputElement> e.target).value
  }

  onSubmit2(){
    this.emailSubmit2 = true
  }

  tradeEmail2(e:any){
    this.email2 = (<HTMLInputElement> e.target).value
  }

//style
  mudaCor(e:number){
    if(e == 0){
      this.Cor = "green"
    }else if(e == 1){
      this.Cor = "blue"
    }else if(e == 2){
      this.Cor = "red"
    }else if(e == 3){
      this.Cor = "yellow"
    }
  }

//for


}
