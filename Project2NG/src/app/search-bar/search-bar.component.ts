import { Component, OnInit } from '@angular/core';
import { FindUsersService } from '../find-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  toFind: string;
  constructor(private findUsersService: FindUsersService, private router: Router) { }

  ngOnInit() {
  }

  findUsers() {
    console.log(this.toFind);
    this.findUsersService.setUserName(this.toFind);
    this.router.navigate(['/home/profileList']);
  }

}
