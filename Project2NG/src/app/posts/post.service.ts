import { Injectable } from '@angular/core';
import { Post } from '../Post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { User } from '../user';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable'

@Injectable()
export class PostService {

  

  posts:Post[] = [
  ]


  constructor(private http:HttpClient, private cookie : CookieService, private router : Router) { }

  fetchPosts(): Post[]{
   return this.posts;
  }

  getPosts(): Post[]
  {
    return this.posts;
  }
   // "/posts/feed" -> get method 
 get20Posts(): Observable<Post[]> {
  const url:string = 'http://localhost:8080/posts/feed';
  const header = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
   };
 return <Observable<Post[]>>this.http.get(url,header)//.subscribe(
  //   (succ:any)=>{
  //     console.log(succ);
  //     this.posts = succ;
  //     console.log(this.posts+" is the posts array")
  //   }
  // );
  // console.log(this.posts+" is the posts array")
  // return this.posts;
 }

  createPost(post : String, formdata: FormData) {

    var resp: Post;
    var poster: Post = new Post(post);

    const url2:string='http://localhost:8080/posts/pictures';
    this.http.post(url2, formdata).subscribe(
      (succ:any)=>{
        console.log(succ);
        resp = succ;
        poster.imageUrl = resp.imageUrl;
        console.log(poster);

        const user = <User>this.cookie.getObject('user');
        poster.id = user.id;
        const id = user.id;

        const url = 'http://localhost:8080/posts';
        const data = {
          'content' : poster.content,
          'imageUrl' : poster.imageUrl,
          'author' : { 'id' : id }
        };

        const header = {
          headers : new HttpHeaders({
            'Content-Type' : 'application/json'
          })
        };
        console.log('data = ' + data.content);
        this.http.post(url, data).subscribe(
          (succ:any) => {
            console.log(succ);
            
            // route to the homepage
            window.location.reload();

            }
        )
  })
   // Http request (post)
   


 }



}
