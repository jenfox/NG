import { Component, OnInit } from '@angular/core';
import { FindUsersService } from '../find-users.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  toFind:String;
  constructor(private findUsersService:FindUsersService) { }

  ngOnInit() {
  }

  findUsers(){
    console.log(this.toFind);
    this.findUsersService.findUsers(this.toFind);
  }

}
