import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../register.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:string="";
  password:string ="";
  confirmPassword:string="";

  constructor(private registerservice:RegisterService, private router:Router) { }

  ngOnInit() {
  }
  register(){
    let modalTitle = document.getElementById('modalTitle');

    if(this.email == ""){
      modalTitle.innerHTML = "Please provide a valid email";
      (<any>$('#registerModal')).modal('show');
      return;
    } else if(this.password == "" ){
      modalTitle.innerHTML = "Please fill out the password field";
      (<any>$('#registerModal')).modal('show');
      return;
    } else if(this.confirmPassword == "") {
      modalTitle.innerHTML = "Please confirm your password";
     (<any>$('#registerModal')).modal('show');
      return;
    } else { 

      //try to register
       this.registerservice.register(this.email, this.password, this.confirmPassword).subscribe(
        (succ: any) => {
          console.log(succ);
          if (succ) {
            modalTitle.innerHTML = "You have successfully registered. Please check your email to confirm your account.";
            modalTitle.onclick = this.navigateToLogin;
            // this.router.navigate(['/login']);
            (<any>$('#registerModal')).modal('show');
          }
          else{
            modalTitle.innerHTML = "Unable to Register User";
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

