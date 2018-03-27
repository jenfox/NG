import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import {User} from '../user';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user:User =new User();
  uProfilePic:string = 'http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg';
  editMode: boolean = false;
  constructor(public navbarService:NavbarService, private cookie:CookieService) { }

  ngOnInit() {
    this.navbarService.show();

    this.user = <User>this.cookie.getObject('user');
  }

editModeToggle(){
  if (this.editMode)
  {
    this.editMode=false;
  }else{
    this.editMode=true;
  }
}

  //on update of form, need to send a post to db of new info.
  
  //need live update of fields from db.

  //onclick for reset password link needs to send password reset email. 

}
