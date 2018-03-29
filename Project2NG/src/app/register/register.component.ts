import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = '';
  password = '';
  confirmPassword = '';

  constructor(private registerservice: RegisterService, private router: Router) { }


  register() {

    let modalTitleObj = document.getElementById('modalTitle');
    let modalBtn = document.getElementById('modalBtn');
    let subBtn = document.getElementById('submitBtn');
    subBtn.setAttribute("disabled", "disabled");


    if (this.email == "") {
      modalTitleObj.innerHTML = "Please provide a valid email";
      (<any>$('#registerModal')).modal('show');
      subBtn.removeAttribute("disabled");
    } else if (this.password == "") {
      modalTitleObj.innerHTML = "Please fill out the password field";
      (<any>$('#registerModal')).modal('show');
      subBtn.removeAttribute("disabled");
    } else if (this.confirmPassword == "") {
      modalTitleObj.innerHTML = "Please confirm your password";
      (<any>$('#registerModal')).modal('show');
      subBtn.removeAttribute("disabled");
    } else {
      //try to register
      this.registerservice.register(this.email, this.password, this.confirmPassword)
        .subscribe(
          result => {
            console.log(result);
            if (result) {
              modalTitleObj.innerHTML = "You have successfully registered. Please check your email to confirm your account.";
             let rtr = this.router;
              modalBtn.onclick = function(){rtr.navigate(['/login']);};
              // this.router.navigate(['/login']);
              (<any>$('#registerModal')).modal('show');
              return;
            }
            else {
              modalTitleObj.innerHTML = "Unable to Register User";
              (<any>$('#registerModal')).modal('show');
              subBtn.removeAttribute("disabled");
            }

          },
          error => {
            modalTitleObj.innerHTML = "Unable to Register User";
            (<any>$('#registerModal')).modal('show');
            subBtn.removeAttribute("disabled");
          },
          () => {
            // 'onCompleted' callback.
            // No errors, route to new page here
          });
    }

  }

}



