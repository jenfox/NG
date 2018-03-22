import { Injectable } from '@angular/core';
import { Post } from '../Post';

@Injectable()
export class PostService {

  posts:Post[] = [
    new Post("Post 1"),
    new Post("Post 2"),
    new Post("Poop 3 the sequel")
  ]


  constructor() { }

  getPosts(): Post[]
  {
    return this.posts;
  }

}
