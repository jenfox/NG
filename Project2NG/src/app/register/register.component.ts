import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:string="";
  password:string ="";
  confirmPassword:string="";
  constructor(private registerservice:RegisterService) { }

  ngOnInit() {
  }
  register(){
    this.registerservice.register(this.email, this.password, this.confirmPassword);
  }

}
