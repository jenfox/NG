import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  numLikes:number
  constructor() { }

  ngOnInit() {
  }
  fetchLikers(){
    //get
  }

  likeThis(){
    console.log("liked")
    //if this user is NOT in the array of users that liked the post
    //add them to the array.
    //update array size
    //put arrraysize into numLikes
  }



}
