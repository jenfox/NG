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
    if(this.email == ""){
      alert("Please provide a valid email");
      return;
    } else if(this.password == "" ){
      alert("Please fill out the password field");
      return;
    } else if(this.confirmPassword == "") {
      alert("Please confirm your password");
      return;
    } else {
    this.registerservice.register(this.email, this.password, this.confirmPassword);
      this.router.navigate(['/']);
    }
  }

}

