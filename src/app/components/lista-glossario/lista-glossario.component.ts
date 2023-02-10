import { Component } from '@angular/core';
import { Todo } from 'src/app/resources/models/todo.model';

@Component({
  selector: 'app-lista-glossario',
  templateUrl: './lista-glossario.component.html',
  styleUrls: ['./lista-glossario.component.css']
})
export class ListaGlossarioComponent {

  public ID!: Number
  public todos: Todo[] = []
  public prosseguir!: boolean
  public numb!: number

  constructor(
  ){
    this.load()
  }

  numero(id: number){
    
    let e = document.getElementsByClassName("item")[id] as HTMLElement

    if(e.style.display == "flex"){
      e.style.display = "none"
    }else{
      e.style.display = "flex"
    }
  }

  load(){
    const data = localStorage.getItem("todos")
    this.todos = JSON.parse(data!)
  }

}
