import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  navbar:boolean= false;
  title = 'app';

  
  class User{
    
  }

 constructor(private http: HttpClient){  }
////////////////////////////////////////////////////////////////////////////////////////////////////////
readonly ROOT_URL ='http://localhost:8080'; //******************THIS IS WHERE THE URL THAT I AM GET/POSTING TO GOES */
posts:any; //opt out of typescript static typing... so that anything you get back you can read, even if its not what you expected
  getPosts(){
  this.http.get(this.ROOT_URL + '/users/1').subscribe(//this.http.get(args) returns an observable
    (succ:any) => {
      console.log(succ);
      this.posts = succ;
    },
    err=>{
      this.posts = {'err':'err'}
    })
  }
/////////////////////////////////////////////
  showNavbar(){
    this.navbar=true;
  }
  hideNavbar(){
    this.navbar=false;
  }

}
