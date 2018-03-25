import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';


@Injectable()
export class RegisterService {

  constructor(private http:HttpClient) { }
  register(email:string, password:string, confirmPassword:string){
    console.log("P: "+password+"; CP: "+confirmPassword);
    if(password != confirmPassword){
      alert("Passwords do not match. Registration failed.")
      return;
    }
    const data={
      "email": email,
      "password":password,
      "confirmPassword":confirmPassword
    }
    const header= {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    this.http.post('http://localhost:8080/register', data, header).subscribe(
      (succ:any)=>{
        console.log(succ);
        alert("You have successfully registered. Please check your email to confirm your account.");
        //Need to drop a redirect to login here, but not sure how that works. 
      }
    )
  }
}
