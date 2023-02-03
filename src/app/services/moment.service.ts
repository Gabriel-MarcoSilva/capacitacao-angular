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

  getMoments(): Observable <Response<Momentos[]>>{
    return this.httpClient.get<Response<Momentos[]>>(this.apiUrl)
  }

  getMoment(id: Number): Observable <Response<Momentos>>{
    const url = `${this.apiUrl}/${id}`
    return this.httpClient.get<Response<Momentos>>(url)
  }

  createMoment(formData: FormData): Observable <FormData>{
    return this.httpClient.post<FormData>(this.apiUrl, formData)
  }

  editMoment(id: Number, formData:FormData):Observable <FormData>{
    const url = `${this.apiUrl}/${id}`
    return this.httpClient.put<FormData>(url, formData)
  }

  removeMoment(id: Number){
    const url = `${this.apiUrl}/${id}`
    return this.httpClient.delete(url)
  }
}
