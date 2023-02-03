import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Momentos } from 'src/app/Moments';
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

  moment?: Momentos;

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
    private messageService: MessagesService,
    private router: Router
  ){}

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get("id")); //pega o id da url

    this.momentService.getMoment(id).subscribe((item) =>{this.moment = item.data})
  }

  async removeHandler(id: string){
    const Id = Number(id)

    await this.momentService.removeMoment(Id).subscribe()

    this.messageService.add("Momento exclído com sucesso")

    this.router.navigate(['/'])
  }

}
