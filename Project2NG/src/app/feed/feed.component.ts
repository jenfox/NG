import { Component, OnInit } from '@angular/core';
import { Post } from '../Post';
import { PostService } from '../posts/post.service';
import { LikePostService } from '../like-post.service';
import { User } from '../user';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts: Post[];
  numLikes: number;
  user: User;

  constructor(private postService: PostService, private likepostservice: LikePostService, private cookie: CookieService) {
  }

  ngOnInit() {
    this.getPosts();
    // init user
    this.user = <User>this.cookie.getObject('user');
  }

  getPosts() {
    this.postService.get20Posts().subscribe(
      posts => this.posts = posts
    );
  }

  likeThis(postId: number) {
    console.log('liked ' + postId);
    console.log(this.posts);

    this.likepostservice.like(postId).subscribe(
      post => this.posts.forEach(function (item, i, posts) {
        // tslint:disable-next-line:triple-equals
        if (item.id == post.id) {
          posts[i] = post;
        }
      })
    );
  }

}
