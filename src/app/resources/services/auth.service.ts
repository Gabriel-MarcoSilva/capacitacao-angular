import { Injectable } from '@angular/core';
import { ResponseLogin } from '../models/ResponseLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loginResponse!: ResponseLogin

  public clear(): void {
    this.loginResponse = {jwt:""}
  }

  public isAuthenticated(): boolean{
    return Boolean(this.loginResponse.jwt.length !== 0)
  }

  constructor() { }
}
