import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { GetUserService } from '../get-user.service';
import {User} from '../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( public navbarService:NavbarService, public getUserService:GetUserService) { }
 private user:User =new User();

  ngOnInit() {
   this.getUserService.getUser(1).subscribe(user => this.user=user);
  
  }

}
