import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './data.service';

import {CookieService} from 'angular2-cookie/services/cookies.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { FeedComponent } from './feed/feed.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { LikeComponent } from './like/like.component';
import { ProfilePicService } from './profile-pic.service';
import { CreatePostComponent } from './create-post/create-post.component';
import { NavbarService } from './navbar.service';
import { HomeComponent } from './home/home.component';
import { PostService } from './posts/post.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
import {RegisterService} from './register.service';
import { PasswordResetService } from './password-reset.service';
import {FindUsersService} from './find-users.service';
import { ProfileListComponent } from './profile-list/profile-list.component'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SearchBarComponent,
    ProfileComponent,
    RegisterComponent,
    FeedComponent,
    PasswordResetComponent,
    LikeComponent,
    CreatePostComponent,
    HomeComponent,
    ProfileListComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    ProfilePicService,
    NavbarService,
    PostService,
    LoginService,
    RegisterService,
    PasswordResetService,
    CookieService,
    FindUsersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
