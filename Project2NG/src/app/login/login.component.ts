import { Component, OnInit } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginService}from '../login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice:LoginService) { }

  public email: string;
  public password: string;

  login(){
    this.loginservice.logIn(this.email, this.password)
  }

  goRegister(){
    
  }

  ngOnInit() {
  }

}
