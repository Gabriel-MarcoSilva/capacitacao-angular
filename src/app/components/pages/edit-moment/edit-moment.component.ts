import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Momentos } from 'src/app/Moments';
import { MessagesService } from 'src/app/services/messages.service';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.css']
})
export class EditMomentComponent {

  moment!: Momentos;
  btnText: string = "Editar"

  constructor(
    private momentService: MomentService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessagesService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"))

    this.momentService.getMoment(id).subscribe((item) => (this.moment = item.data))
  }

  async editHandler(momentData: Momentos) {
    const id = Number(this.moment.id);

    const formData = new FormData()

    formData.append("title", momentData.title)
    formData.append("description", momentData.description)

    if (momentData.image) {
      formData.append("image", momentData.image)
    }

    await this.momentService.editMoment(id!, formData).subscribe()

    this.messageService.add("Momento atualizado com sucesso!!!")

    this.router.navigate(['/'])
  }
}
