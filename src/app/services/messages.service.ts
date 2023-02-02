import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  message: string = "tem mensagem pra você";

  constructor() { }
}
