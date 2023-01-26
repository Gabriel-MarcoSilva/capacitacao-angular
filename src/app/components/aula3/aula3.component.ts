import { Component } from '@angular/core';

@Component({
  selector: 'app-aula3',
  templateUrl: './aula3.component.html',
  styleUrls: ['./aula3.component.css']
})
export class Aula3Component {

  palavra: string = "este é um exemplo de String Interpolation"
  permite: boolean = true;
  email: string = "teste@teste.com"

  init(){
    console.log("lkj")
    setTimeout(() =>{
      this.permite = false
    }, 5000);

    setTimeout(() =>{
      this.permite = true
    }, 1000);
  }

  eventInput(e: any){
    console.log(e)
    this.email = (<HTMLInputElement> e.target).value
  }  

  trade(){
    this.palavra = "olha só mudou minha propriedade"
  }

}
