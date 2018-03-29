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
    let pic : any;
    pic = document.getElementById("picture");
    let files = [];
    let filename: any;
    files = pic.files;
    
    let theFile : File = files[0];
    let formdata: FormData = new FormData();

    console.log(theFile);

    formdata.append('multipartFile', theFile);

    console.log(formdata);

    this.postService.createPost(this.userPost, formdata);
    
  }

}
