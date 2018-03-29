import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private cookie: CookieService, private http: HttpClient, private router: Router) { }
  public oldpassword = '';
  public newpassword = '';
  public confnewpassword = '';
  public user: User = new User;
  public user2: User = new User;

  ngOnInit() {
  }

  public checkerCheck() {
    // tslint:disable-next-line:triple-equals
    const checker: boolean = (this.newpassword != this.confnewpassword);
    return checker;
  }

  public update() {
    let passModal = document.getElementById('passwordModal');
    let passModalTitle = document.getElementById('passwordModalTitle');

    this.user = <User>this.cookie.getObject('user');
    // tslint:disable-next-line:triple-equals
    if (this.newpassword != this.confnewpassword) {
      // alert('Your new passwords do not match.');
      passModalTitle.innerHTML='Your new passwords do not match.';
      (<any>$('#passwordModal')).modal('show');
      return;
    }
    const data = {
      'email': this.user.email,
      'password': this.oldpassword
    };
    const header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post('http://localhost:8080/login', data, header).subscribe(
      (succ: any) => {
        console.log(succ);
        this.user2 = succ;

        // tslint:disable-next-line:triple-equals
        if (this.user2 && this.user2.email == this.user.email) {
          const data2 = {
            'email': this.user.email,
            'password': this.newpassword
          };
          this.http.post('http://localhost:8080/users/password', data2, header).subscribe(
            // tslint:disable-next-line:no-shadowed-variable
            (succ: any) => {
              console.log(succ);
              (<any>$('#passwordModal')).modal('show');
              this.router.navigateByUrl('/home/profile');
            }
          );
        } else {
          //incorrect password 
          passModalTitle.innerHTML='Incorrect Password';
          (<any>$('#passwordModal')).modal('show');

        }
      }
    );

  }

}
