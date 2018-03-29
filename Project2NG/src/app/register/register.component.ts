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

  ngOnInit() {
  }
  register(){
    let modalTitleObj = document.getElementById('modalTitle');

    if(this.email == ""){
      modalTitleObj.innerHTML = "Please provide a valid email";
      (<any>$('#registerModal')).modal('show');
      return;
    } else if(this.password == "" ){
      modalTitleObj.innerHTML = "Please fill out the password field";
      (<any>$('#registerModal')).modal('show');
      return;
    } else if(this.confirmPassword == "") {
      modalTitleObj.innerHTML = "Please confirm your password";
     (<any>$('#registerModal')).modal('show');
      return;
    } else { 
      //try to register
       this.registerservice.register(this.email, this.password, this.confirmPassword).subscribe(
        (succ: any) => {
          console.log(succ);
          if (succ) {
            modalTitleObj.innerHTML = "You have successfully registered. Please check your email to confirm your account.";
            modalTitleObj.onclick = this.navigateToLogin;
            // this.router.navigate(['/login']);
            (<any>$('#registerModal')).modal('show');
          }
          else{
            modalTitleObj.innerHTML = "Unable to Register User";
            (<any>$('#registerModal')).modal('show');
          }
           
        }
      );
      

    }
  }
  navigateToLogin()
  {
    this.router.navigate(['/home']);
  }

}

