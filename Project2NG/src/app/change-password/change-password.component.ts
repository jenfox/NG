import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../user';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private cookie:CookieService, private http: HttpClient, private router:Router) { }
  public oldpassword: string = "";
  public newpassword: string = "";
  public confnewpassword: string = "";
  public user:User= new User;
  public user2:User = new User;

  ngOnInit() {
  }

  public update(){
    this.user= <User>this.cookie.getObject('user');
    const data={
      "email": this.user.email,
      "password": this.oldpassword
    }
    const header= {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    this.http.post('http://localhost:8080/login', data, header).subscribe(
      (succ:any)=>{
        console.log(succ);
        this.user2 = succ;

        if(this.user2.email == this.user.email){
          const data2={
            "email": this.user.email,
            "password": this.newpassword
          }
        this.http.post('http://localhost:8080/user/password', data2, header).subscribe(
          (succ:any)=>{
            console.log(succ);
            alert("You have successfully changed your password. ")
            this.router.navigateByUrl("/home/profile")
          }
        )
      } else {
        alert("Incorrect Password");
      }
      }
    )
    
  }

}
