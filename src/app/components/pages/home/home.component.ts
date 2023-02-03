import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Momentos } from 'src/app/Moments';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allMoments: Momentos[] = []
  moments: Momentos[] = []
  baseApiUrl = "http://localhost:3333/"

  constructor(
    private momentosService: MomentService
  ){}

  faSearch = faSearch
  searchTerm: string = ""

  ngOnInit(): void{
    this.momentosService.getMoment().subscribe((item) =>{
      const data = item.data

      data.map((item) =>{
        item.created_at = new Date(item.created_at!).toLocaleDateString("pt-br")
      })

      this.allMoments = data
      this.moments = data
    })
  }

  search(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.moments = this.allMoments.filter((moment) =>{
      return moment.title.toLowerCase().includes(value) //toLower pra n diferenciar caixa alta pra baixa
    })
  }
}
