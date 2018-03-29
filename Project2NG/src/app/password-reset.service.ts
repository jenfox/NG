import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class PasswordResetService {

  constructor(private http: HttpClient, private router: Router) { }

  public reset(email: string) {
    const data = {
      'email': email
    };
    const header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post('http://localhost:8080/reset', data, header).subscribe(
      (succ: any) => {
        console.log(succ);
        // alert("If your email is valid you will recieve an email with a temporary password.")
        this.router.navigateByUrl('/');
      }
    );
  }


}
