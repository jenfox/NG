import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class FindUsersService {

  constructor(private router:Router) { }

  findUsers(toFind:String){
    //needs a servlet method for http request
    this.router.navigateByUrl('/profileList')
  }

}
