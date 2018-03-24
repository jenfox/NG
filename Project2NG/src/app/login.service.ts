import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }
  logIn(email:string, password:string){
    // console.log("email = "+this.email);
    // console.log(this.password);
    const data={
      'email': email,
      'password':password
    }
    this.http.post('http://localhost:8080/login', {data}).subscribe(
      (succ:any)=>{
        console.log(succ);
      }
    )
  }
}
