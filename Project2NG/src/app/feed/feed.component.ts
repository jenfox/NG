import { Component, OnInit } from '@angular/core';
import { Post } from '../Post';
import { PostService } from '../posts/post.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts: Observable<any>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    //switching to live
    //this.posts = this.postService.getPosts();
    this.getPosts();

  }

  getPosts(): void {
    this.posts = this.postService.getPostsLive();
  }

}
