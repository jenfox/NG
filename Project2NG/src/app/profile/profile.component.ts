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
  uFirstName:string='';
  uLastName:string='';
  uGender:string='';
  uOrientation:string='';
  uDOB: Date = null;
  uPhoneNumber:string = ''
  
  constructor(public navbarService:NavbarService) { }

  ngOnInit() {
  
    this.navbarService.show();
  }

}
