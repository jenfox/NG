import { Injectable } from '@angular/core';
import { Post } from '../Post';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {

  

  posts:Post[] = [
    new Post("Post 1"),
    new Post("Post 2"),
    new Post("Poop 3 the sequel")
  ]


  constructor(private http:HttpClient) { }

  fetchPosts(): Post[]{
   return this.posts;
  }

  createPost(body:String){

  }

  getPosts(): Post[]
  {
    return this.posts;
  }

}
