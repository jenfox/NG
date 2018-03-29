import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from './Post';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { User } from './user';


@Injectable()
export class LikePostService {

  numLikes: number;
  constructor(private http: HttpClient, private cookie: CookieService) { }

  like(postId: number): Observable<Post> {
    const user: User = <User>this.cookie.getObject('user');
    const url: string = 'http://localhost:8080/likes/' + postId;
    const body = {
      'id': user.id
    };
    const header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return <Observable<Post>>this.http.post(url, body, header);
  }
}
