import { Injectable } from '@angular/core';
import { Post } from '../Post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { User } from '../User';
import { Router } from '@angular/router';

@Injectable()
export class PostService {

  

  posts:Post[] = [
    new Post("Post 1"),
    new Post("Post 2"),
    new Post("Poop 3 the sequel")
  ]


  constructor(private http:HttpClient, private cookie : CookieService, private router : Router) { }

  fetchPosts(): Post[]{
   return this.posts;
  }

  getPosts(): Post[]
  {
    return this.posts;
  }

  createPost(post : String) {

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
     (succ:any) => {
       console.log(succ);
       
      // route to the homepage
       window.location.reload();

      }
   )


 }

 // "/posts/feed" -> get method 
 get20Posts() {

 }

}
