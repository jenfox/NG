import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class RegisterService {

  constructor(private http: HttpClient, private router: Router) { }

  register(email: string, password: string, confirmPassword: string): Observable<boolean> {
    console.log("P: " + password + "; CP: " + confirmPassword);
    const data = {
      'email': email,
      'password': password,
      'confirmPassword': confirmPassword
    };
    const header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<boolean>('http://localhost:8080/register', data, header);
  }
}
