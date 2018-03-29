import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  navbar = false;
  title = 'app';

  showNavbar() {
    this.navbar = true;
  }
  hideNavbar() {
    this.navbar = false;
  }

}
