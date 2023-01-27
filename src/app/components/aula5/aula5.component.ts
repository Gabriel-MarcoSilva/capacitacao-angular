import { Component } from '@angular/core';
import { ProductsService } from "../../services/products.service"

@Component({
  selector: 'app-aula5',
  templateUrl: './aula5.component.html',
  styleUrls: ['./aula5.component.css']
})
export class Aula5Component {

  produtos: any

  constructor(
    private productService: ProductsService
  ){  }

  ngOnInit(){
    this.productService.getNames().subscribe(
      (data) =>{
        this.produtos = data
      },(err) =>{
        console.log(err)
      }
    )
  }
}
