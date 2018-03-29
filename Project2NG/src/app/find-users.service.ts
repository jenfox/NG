import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FindUsersService {

  public toFind:string;

  constructor(private http:HttpClient, private router:Router) { }

  setUserName(toFind:string)
  {
    this.toFind = toFind;
    console.log('set username to find'+this.toFind)
  }

  findUsers():Observable<User[]>{
    //if 'name name'
    //get '/users/{firstname}/{lasname}'
    //expects nothing (appended to url.)
    if (this.toFind.indexOf(" ") + 1 ){
    //alert('contains');
    let firstName = this.toFind.substring(0,this.toFind.indexOf(" "));
    let lastName = this.toFind.substring((this.toFind.indexOf(" ")+1))
    console.log(firstName+" "+lastName+" is the name you are querying")
    const uRl = 'http://localhost:8080/users/'+firstName+'/'+lastName;
    const header= {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.get<User[]>(uRl, header);
        
  }
else {
console.log("no spaces");
const uRl = 'http://localhost:8080/users/find/'+this.toFind;
    const header= {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }

    return this.http.get<User[]>(uRl, header);
  }


    //if one name: (else)
    //get '/users/find/{name}'
    //expects nothing (appended to url.)


    //this.router.navigateByUrl('/home/profileList')
  }

}
