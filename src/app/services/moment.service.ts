import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs"
import { Momentos } from '../Moments';
import { Response } from '../Response';

@Injectable({
  providedIn: 'root'
})
export class MomentService {

  private baseApiUrl:string = "http://localhost:3333/"
  private apiUrl:string =`${this.baseApiUrl}api/moments` 

  constructor(private httpClient: HttpClient) { }

  getMoment(): Observable <Response<Momentos[]>>{
    return this.httpClient.get<Response<Momentos[]>>(this.apiUrl)
  }

  createMoment(formData: FormData): Observable <FormData>{
    return this.httpClient.post<FormData>(this.apiUrl, formData)
  }
}
