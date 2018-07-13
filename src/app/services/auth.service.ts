import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credential } from '../models/credential';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string;

  constructor(private http: HttpClient) {
    this.token = '';
  }

  login(credential: Credential): Observable<Token> {
    return this.http.post<Token>(`${environment.api_base}/auth/login`, credential);
  }

  isLogin(): boolean {
    return (this.token !== '');
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }
}
