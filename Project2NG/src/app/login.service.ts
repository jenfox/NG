import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';


@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }
  logIn(email:string, password:string){
    // console.log("email = "+this.email);
    // console.log(this.password);
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
      }
    )
  }
}
