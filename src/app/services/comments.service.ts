import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from '../Comments';
import { Response } from '../Response';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private baseApiUrl = "http://localhost:3333/"
  private apiUrl = `${this.baseApiUrl}api/moments`

  constructor(
    private http: HttpClient,
    ) { }

  createComment(data: Comments): Observable<Response<Comments>> {

    const url = `${this.apiUrl}/${data.momentId}/comments`
    return this.http.post<Response<Comments>>(url, data)
  }
}
