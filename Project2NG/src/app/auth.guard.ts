import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { User } from './user';

@Injectable()
export class AuthGuard implements CanActivate {

  user: User;

  constructor(private cookie: CookieService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.user = <User>this.cookie.getObject('user');
    if (this.user.email){
      console.log(this.user.email)
      return true;
    }
    console.log(this.user.email)
    return false;
  }
}
