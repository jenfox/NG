import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { User } from './user';


@Injectable()
export class LoginService {

user:User;

  constructor(private cookie:CookieService, private http: HttpClient, private router:Router) { }
  logIn(email:string, password:string){
    const data={
      "email": email,
      "password":password
    }
    const header= {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    this.http.post('http://localhost:8080/login', data, header).subscribe(
      (succ:any)=>{
        console.log(succ);
        this.user = succ;
        this.cookie.putObject('user',this.user);
        console.log(this.cookie.get('user'), "is thine cookie");
        this.router.navigateByUrl("/home")
        
        //guard is ng g guard loggedin...
        // on routes page, each route can be set to check this guard. 
        //guard can be if this.cookie.user exists
       
        //logout
        //this.cookie.deleteAll();
      }
    )
  }
}
