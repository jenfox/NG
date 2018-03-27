import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import {User} from '../user';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private updateUser:User  =new User;
  public user:User =new User();
  uProfilePic:string = 'http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg';
  editMode: boolean = false;
  constructor(private headers:HttpHeaders,private router:Router, private http:HttpClient, public navbarService:NavbarService, private cookie:CookieService) { }

  ngOnInit() {
    this.navbarService.show();

    this.user = <User>this.cookie.getObject('user');
  }

  updateProfile(){
    console.log(this.updateUser);
    const data={
      "firstName": this.updateUser.firstName,
      "lastName": this.updateUser.lastName
      
    }
    const header= {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    // DO NOT RUN THIS CODE!!! IT WILL BREAK LOGIN 
    this.http.post('http://localhost:8080/login', data, header).subscribe(
      (succ:any)=>{
        console.log(succ);
        this.user = succ;
        this.cookie.putObject('user',this.user);
        console.log(this.cookie.get('user'), "is thine cookie");
        this.router.navigateByUrl("/home")
        
  })
}
  
editModeToggle(){
  if (this.editMode)
  {
    this.editMode=false;
  }else{
    this.editMode=true;
  }
}

  //on update of form, need to send a post to db of new info.
  
  //need live update of fields from db.

  //onclick for reset password link needs to send password reset email. 

}
