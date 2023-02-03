import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Comments } from 'src/app/Comments';
import { Momentos } from 'src/app/Moments';
import { CommentsService } from 'src/app/services/comments.service';
import { MessagesService } from 'src/app/services/messages.service';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent {

  faTimes = faTimes
  faEdit = faEdit

  commentForm!: FormGroup

  moment?: Momentos;

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
    private messageService: MessagesService,
    private router: Router,
    private commentService: CommentsService
  ){}

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get("id")); //pega o id da url

    this.momentService.getMoment(id).subscribe((item) =>{this.moment = item.data})

    this.commentForm = new FormGroup({
      text: new FormControl("", [Validators.required]),
      username: new FormControl("", [Validators.required]),
    })
  }

  get text(){
    return this.commentForm.get("text")!
  }

  get username(){
    return this.commentForm.get("username")!
  }

  async removeHandler(id: string){
    const Id = Number(id)

    await this.momentService.removeMoment(Id).subscribe()

    this.messageService.add("Momento exclído com sucesso")

    this.router.navigate(['/'])
  }

  async onSubmit(formDirective: FormGroupDirective){
    if(this.commentForm.invalid){
      return;
    }
    
    const data: Comments = this.commentForm.value;

    data.momentId = Number(this.moment!.id);

    await this.commentService.createComment(data).subscribe((comment) =>{
      this.moment!.comments!.push(comment.data)
    })

    this.messageService.add("Comentário adicionado")

    //reseta os formularios no front e no back

    this.commentForm.reset()

    formDirective.resetForm()
  }

}
