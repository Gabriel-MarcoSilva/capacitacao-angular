import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/resources/models/todo.model';

@Component({
  selector: 'app-glossario',
  templateUrl: './glossario.component.html',
  styleUrls: ['./glossario.component.css']
})
export class GlossarioComponent {

  public todos: Todo[] = []
  public form!: FormGroup
  public ID!: Number

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
    ){
    this.form = this.fb.group({
      termo: ['', Validators.compose([Validators.required])],
      significado: ["", Validators.compose([Validators.required])]
    })

    this.load()
    this.ID = Number(this.route.snapshot.paramMap.get("id"))
  }

  clear(){
    this.form.reset()
  }

  add(){
    const termo = this.form.controls['termo'].value;
    const id = this.todos.length;
    const significado = this.form.controls['significado'].value
    //const description = "lkjlkjkljklj"

    this.todos.push( new Todo(id, termo, significado));

    this.save();
    this.router.navigate([''])
  }

  load(){
    const data = localStorage.getItem("todos")
    this.todos = JSON.parse(data!)
  }

  save(){
    const data = JSON.stringify(this.todos);
    localStorage.setItem("todos", data)
  }
}
