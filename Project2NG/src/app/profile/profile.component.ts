import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  uProfilePic:string = 'http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg';
  uEmail: string = '';
  uFirstName:string='Hermione';
  uLastName:string='Granger';
  uGender:string='Female';
  uOrientation:string='Straight';
  uDOB: Date = null;
  uPhoneNumber:string = '(123) 456-7890';
  editMode: boolean = false;
  constructor(public navbarService:NavbarService) { }

  ngOnInit() {
  
    this.navbarService.show();
  }

  //on update of form, need to send a post to db of new info.
  
  //need live update of fields from db.

}
