import { Injectable } from '@angular/core';
import { Post } from '../Post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { User } from '../user';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostService {



  posts: Post[] = [
  ];


  constructor(private http: HttpClient, private cookie: CookieService, private router: Router) { }

  fetchPosts(): Post[] {
   return this.posts;
  }

  getPosts(uid): Observable<Post[]> {
    const url = 'http://localhost:8080/posts/feed/' + uid;
    const header = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
     };
   return <Observable<Post[]>>this.http.get(url, header); // .subscribe(
  }

 get20Posts(): Observable<Post[]> {
  const url = 'http://localhost:8080/posts/feed';
  const header = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
   };
 return <Observable<Post[]>>this.http.get(url, header); // .subscribe(

 }

  createPost(post: String) {

   // Http request (post)
   const user = <User>this.cookie.getObject('user');
   const id = user.id;

   const url = 'http://localhost:8080/posts';
   const data = {
     'content' : post,
     'author' : { 'id' : id }
   };
   const header = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
   };
   console.log('data = ' + data.author.id);
   this.http.post(url, data, header).subscribe(
     (succ: any) => {
       console.log(succ);

      // route to the homepage
       window.location.reload();

      }
   );


 }



}
