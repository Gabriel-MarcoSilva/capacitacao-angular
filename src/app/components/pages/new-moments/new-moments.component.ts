import { Component } from '@angular/core';
import { Momentos } from 'src/app/Moments';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrls: ['./new-moments.component.css']
})
export class NewMomentsComponent {

  constructor(private momentService: MomentService){}

  btnText: string = "Compartilhar"

  async createHeandler(moment:Momentos){
    const formData = new FormData()

    formData.append("title", moment.title)
    formData.append("description", moment.description)

    if(moment.image){
      formData.append("image", moment.image)
    }
    
    await this.momentService.createMoment(formData).subscribe()
  }

}
