import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginInput } from '../models/login-input';
import { Backend } from '../utils/backend';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  public realizarLogin(loginInput: LoginInput): Observable<any> {
    return this.http.post(Backend.getBaseLogin, loginInput);
  }
}
