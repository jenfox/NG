import { Component, OnInit } from '@angular/core';
import { Post } from '../Post';
import { PostService } from '../posts/post.service';
import { LikePostService } from '../like-post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts: Post[];
  numLikes:number;

  currentUser: {

  }
  constructor(private postService: PostService, private likepostservice: LikePostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.get20Posts().subscribe(
      posts => this.posts = posts
    );
    // console.log("back in feed.component.oninit");
    // console.log(this.posts[1]);
    // console.log(this.posts);
  }

  likeThis(postId: number) {
    console.log("liked " + postId)
    console.log(this.posts)
    //if this user is NOT in the array of users that liked the post
    //add them to the array.
    //update array size
    //put arrraysize into numLikes

    this.likepostservice.like(postId).subscribe(
      post => this.posts.forEach(function (item, i, posts) {
        if (item.id == post.id)
          posts[i] = post
      })
    );

    

  }

}
