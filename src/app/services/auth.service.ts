import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private host = 'https://example.com'; // Reemplaza esto con la URL de tu backend

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const url = `${this.host}/api/login`;
    const body = { email, password };

    return this.http.post(url, body);
  }
}
