import { Component, OnInit } from '@angular/core';
import { Post } from '../Post';
import { PostService } from '../posts/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts: Post[];
  currentUser:{
    
  }
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.posts = this.postService.get20Posts();
  }

}
