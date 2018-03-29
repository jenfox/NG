import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component';
import { PasswordResetComponent } from '../password-reset/password-reset.component';
import { FeedComponent } from '../feed/feed.component';
import { HomeComponent } from '../home/home.component';
import {RegisterComponent} from '../register/register.component';
import {ProfileListComponent} from '../profile-list/profile-list.component'
import { AuthGuard } from '../auth.guard';
import { OtherProfileComponent } from '../other-profile/other-profile.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'passwordReset',
    component: PasswordResetComponent
  },
  {
    path: 'home',
    canActivate:[AuthGuard],
    component: HomeComponent,
    children:[
      {path:'', redirectTo:'feed', pathMatch:'full'},
      {path:'profile', component: ProfileComponent},
      {path:'feed', component: FeedComponent},
      {path:'profileList', component:ProfileListComponent},
      {path:'otherPeep/:id', component:OtherProfileComponent}
    ]
  },
  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ], exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
