import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  server = "http://localhost:4000"

  constructor(private http: HttpClient) {   }

  public getNames(){
    return this.http.get(`${this.server}/listMessage`)
  }
}
