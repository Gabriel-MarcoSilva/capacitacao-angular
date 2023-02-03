import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Momentos } from 'src/app/Moments';
import { MessagesService } from 'src/app/services/messages.service';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrls: ['./new-moments.component.css']
})
export class NewMomentsComponent {

  constructor(
    private momentService: MomentService,
    private messageService: MessagesService,
    private router: Router
  ){}

  btnText: string = "Compartilhar"

  async createHeandler(moment:Momentos){
    const formData = new FormData()

    formData.append("title", moment.title)
    formData.append("description", moment.description)

    if(moment.image){
      formData.append("image", moment.image)
    }

    //create
    await this.momentService.createMoment(formData).subscribe()

    //exibir
    this.messageService.add("momento adicionado com sucesso!!")

    //redirecionar
    this.router.navigate(['/'])
  }

}
