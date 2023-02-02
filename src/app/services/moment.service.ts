import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class MomentService {

  private baseApiUrl:string = "http://localhost:3333/"
  private apiUrl:string =`${this.baseApiUrl}api/moments` 

  constructor(private httpClient: HttpClient) { }

  createMoment(formData: FormData): Observable <FormData>{
    return this.httpClient.post<FormData>(this.apiUrl, formData)
  }
}
