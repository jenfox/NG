import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import {User} from '../user';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

constructor(private router:Router, private cookie:CookieService, public navbarService:NavbarService) { }
  
  public user:User= new User;

  ngOnInit() {
   this.user= <User>this.cookie.getObject('user');
  }

  logout(){
    this.cookie.removeAll();
    this.router.navigateByUrl("/");
  }

}
