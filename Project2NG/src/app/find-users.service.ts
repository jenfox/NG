import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class FindUsersService {

  public listOfMatches:User[];

  constructor(private http:HttpClient, private router:Router) { }

  public getListOfMatches():User[]{
    return this.listOfMatches;
  }

  findUsers(toFind:String){
    //if 'name name'
    //get '/users/{firstname}/{lasname}'
    //expects nothing (appended to url.)
    if (toFind.indexOf(" ") + 1 ){
    //alert('contains');
    let firstName = toFind.substring(0,toFind.indexOf(" "));
    let lastName = toFind.substring((toFind.indexOf(" ")+1))
    console.log(firstName+" "+lastName+" is the name you are querying")
    const uRl = 'http://localhost:8080/users/'+firstName+'/'+lastName;
    const header= {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    this.http.get(uRl, header).subscribe(
      (succ:any)=>{
        console.log(succ);
        this.listOfMatches = succ;
        this.router.navigateByUrl('/home/profileList')
      }
    )
  }
else {
console.log("no spaces");
const uRl = 'http://localhost:8080/users/find/'+toFind;
    const header= {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    this.http.get(uRl, header).subscribe(
      (succ:any)=>{
        console.log(succ);
        this.listOfMatches = succ;
        this.router.navigateByUrl('/home/profileList')
      }
    )
}


    //if one name: (else)
    //get '/users/find/{name}'
    //expects nothing (appended to url.)


    //this.router.navigateByUrl('/home/profileList')
  }

}
