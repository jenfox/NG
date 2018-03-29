import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';
import { Router } from '@angular/router';



@Injectable()
export class RegisterService {


  constructor(private http: HttpClient, private router: Router) { }

  register(email: string, password: string, confirmPassword: string): string {
    console.log("P: " + password + "; CP: " + confirmPassword);
    if (password != confirmPassword) {
      return "Passwords do not match. Registration failed.";
    }
    const data = {
      "email": email,
      "password": password,
      "confirmPassword": confirmPassword
    }
    const header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    this.http.post('http://localhost:8080/register', data, header).subscribe(
      (succ: any) => {
        console.log(succ);
        if (succ) 
          return "You have successfully registered. Please check your email to confirm your account.";
        else
          return "Unable to register user";
      }
    )
  }
}
