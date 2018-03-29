import { Component, OnInit } from '@angular/core';
import { FindUsersService } from '../find-users.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  public profileList:User[]

  constructor(private router:Router, private findUsersService:FindUsersService) { }

  ngOnInit() {
    this.profileList =this.findUsersService.getListOfMatches();
    console.log(this.profileList);
  }

  goToProfile(userId:number){
    this.router.navigate(["/home/otherPeep/",userId])//navigate to wherever user profile lives.
  }

}
