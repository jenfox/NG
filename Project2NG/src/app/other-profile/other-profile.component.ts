import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FindUserService } from '../find-user.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

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


  constructor(private http: HttpClient,
    private findUserService: FindUserService, private route: ActivatedRoute) {


  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.userId = +params['id']; // (+) converts string 'id' to a number
      console.log('route id ' + this.userId);
      // make request to populate user info
      this.findUserService.findUser(this.userId).subscribe(user => this.profilePic(user));

    });
  }

  profilePic(user: User) {
    this.user = user;
    this.uProfilePic = 'https://s3.amazonaws.com/friendscape/' + this.user.profileUrl;
  }
  loadOtherFeed(userId: number) {

  }


}
