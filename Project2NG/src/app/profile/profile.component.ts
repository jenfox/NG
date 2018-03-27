import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import {User} from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user:User =new User();
    // id: number;
    // firstName: string;
    // lastName: string;
    // phone: string;
    // email: string;
    // dateOfBirth: string;
    // gender: string;
  uProfilePic:string = 'http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg';

  editMode: boolean = false;
  constructor(public navbarService:NavbarService) { }

  ngOnInit() {
    this.navbarService.show();
    
    this.user.id=1;
    this.user.firstName='Hermione';
    this.user.lastName='Granger';
    this.user.phone = '123-456-7890';
    this.user.email='hgranger@hogwwarts.edu';
    this.user.dateOfBirth = 'noneya'
    this.user.gender='Female';





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
