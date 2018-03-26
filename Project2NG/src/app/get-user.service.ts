import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GetUserService {

  constructor(private http:HttpClient) { }
  private user:User = new User;
  toGet:string = 'http://localhost:8080/users/'

  getUser(id:number) :Observable<User>{
    return this.http.get<User>(this.toGet+id)
      }


}
