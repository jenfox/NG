import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { LoginService } from '../login.service'
import { User } from '../user';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice: LoginService, private cookie: CookieService, private router: Router) { }

  public password: string;
  public email: string;
  public user: User;

  login() {
    this.loginservice.logIn(this.email, this.password).subscribe(
      (succ: any) => {
        console.log(succ);
        this.user = succ;

        //User actaully logged in
        if (succ) {
          this.cookie.putObject('user', this.user);
          console.log(this.cookie.get('user'), "is thine cookie");
          this.router.navigateByUrl("/home")
        }
        else{
          (<any>$('#loginModal')).modal('show');
        }

      },
      error => {
        //indicate to user that their login has failed!
        (<any>$('#loginModal')).modal('show');
      },
      () => {
        // 'onCompleted' callback.
        // No errors, route to new page here
      }
    )
  }

  ngOnInit() {
  }

}
