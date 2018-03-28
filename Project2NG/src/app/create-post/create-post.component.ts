import { Component, OnInit } from '@angular/core';
import { PostService } from '../posts/post.service';
import { Post } from '../Post';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  userPost : String = "";

  constructor(private postService : PostService) { }

  ngOnInit() {
  }

  writePost(){

    this.postService.createPost(this.userPost);
    
  }

}
