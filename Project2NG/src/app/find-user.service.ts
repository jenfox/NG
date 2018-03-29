import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';

@Injectable()
export class FindUserService {

  constructor(private http: HttpClient) { }

  findUser(userId: number): Observable<User> {
    const url = 'http://localhost:8080/users/' + userId;
    const header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get<User>(url, header);
  }

}
