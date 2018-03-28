import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import {User} from '../user';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private updateUser:User  =new User;
  public user:User =<User>this.cookie.getObject('user');
  uProfilePic:string = 'https://s3.amazonaws.com/friendscape/' + this.user.profileUrl;
  editMode: boolean = false;

  public pic: File; 

  constructor(private router:Router, private http:HttpClient, public navbarService:NavbarService, private cookie:CookieService) { }



  ngOnInit() {
    this.navbarService.show();

    this.user = <User>this.cookie.getObject('user');
  }

//on submit of form, need to send a post to db of new info.
  updateProfile(){
    console.log(this.updateUser);
    const id = this.user.id;
    console.log(id+" is the id you are appending");
    const url:string='http://localhost:8080/users/'+id;
    const data={
      "firstName": this.updateUser.firstName,
      "lastName": this.updateUser.lastName,
      "gender": this.updateUser.gender,
      "phoneNumber": this.updateUser.phoneNumber,
      "DoB": this.updateUser.dateOfBirth      
    }
    const header= {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
     
    this.http.post(url, data, header).subscribe(
      (succ:any)=>{
        console.log(succ);
        this.user = succ;
        this.cookie.putObject('user',this.user);
        console.log(this.cookie.get('user'), "is thine cookie");
        this.router.navigateByUrl("/home/profile")
        
  })
}

uploadPic(){
  console.log(this.pic);
  const id = this.user.id;
  const url:string='http://localhost:8080/profilePictures/'+id;
  let formdata: FormData = new FormData();
  const header= {
    headers:new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      'Accept': '*/*'
    })}
 
    formdata.append('file', this.pic);
 
    this.http.post(url, formdata, header).subscribe(
      (succ:any)=>{
        console.log(succ);
        this.user = succ;
        this.cookie.putObject('user',this.user);
        console.log(this.cookie.get('user'), "is thine cookie");
        this.router.navigateByUrl("/home/profile")
        
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

  
  
  //need live update of fields from db.

  //onclick for reset password link needs to send password reset email. 

}
