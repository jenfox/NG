import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FindUserService } from '../find-user.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../posts/post.service';
import { Post } from '../Post';

@Component({
  selector: 'app-other-profile',
  templateUrl: './other-profile.component.html',
  styleUrls: ['./other-profile.component.css']
})
export class OtherProfileComponent implements OnInit {

  user: User;
  userId: number;
  private sub: any;
  uProfilePic: string;
  private posts: Post[];
  private post: Post;

  constructor(private http: HttpClient, private findUserService: FindUserService,
    private route: ActivatedRoute, private postService: PostService) {


  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.userId = +params['id']; // (+) converts string 'id' to a number
      console.log('route id ' + this.userId);
      // make request to populate user info
      this.findUserService.findUser(this.userId).subscribe(
        (succ: any) => {
          console.log(succ);
          this.user = succ;
          this.profilePic(this.user);
        });
    });
    this.postService.getPosts(this.userId).subscribe(
      (succ: any) => {
        console.log(succ);
        this.posts = succ;
      }
    );
    console.log(this.posts);
  }
  // this.getPosts(); will display all of the feed
  // for (this.post of this.posts) {
  // if (this.post.)
  // }

  profilePic(user: User) {
    this.user = user;
    this.uProfilePic = 'https://s3.amazonaws.com/friendscape/' + this.user.profileUrl;
  }

  getPosts() {
    this.postService.get20Posts().subscribe(
      posts => this.posts = posts
    );
  }


}
