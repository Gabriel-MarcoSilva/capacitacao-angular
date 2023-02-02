import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MomentService {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("/").subscribe()
  }
}
