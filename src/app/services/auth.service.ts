import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, @Inject('BASE_API_URL') private baseUrl: string) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.baseUrl + '/auth', {
      username,
      password
    }, httpOptions);
  }
}
