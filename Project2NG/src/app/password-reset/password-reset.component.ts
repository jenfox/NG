import { Component, OnInit } from '@angular/core';
import { PasswordResetService } from '../password-reset.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  constructor(private resetservice: PasswordResetService) { }
  public email: string = "";

  public reset(){
    this.resetservice.reset(this.email);
  }

  ngOnInit() {
  }

}
