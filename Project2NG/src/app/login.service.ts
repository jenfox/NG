import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class LoginService {

user:User;

  constructor(private http: HttpClient) { }


  logIn(email:string, password:string):Observable<User>{

    const data={
      "email": email,
      "password":password
    }
    const header= {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.post<User>('http://localhost:8080/login', data, header);
  }
}
