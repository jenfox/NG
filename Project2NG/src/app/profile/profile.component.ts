import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { User } from '../user';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { PostService } from '../posts/post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private updateUser: User = new User;
  public user: User = <User>this.cookie.getObject('user');
  uProfilePic: string = 'https://s3.amazonaws.com/friendscape/' + this.user.profileUrl;
  editMode = false;
  private posts;
  private userId;

  constructor(private router: Router, private http: HttpClient, public navbarService: NavbarService, private cookie: CookieService,
        private postService: PostService) { }



  ngOnInit() {
    this.navbarService.show();
    this.user = <User>this.cookie.getObject('user');
    this.userId = this.user.id;

    this.postService.getPosts(this.userId).subscribe(
      (succ: any) => {
        console.log(succ);
        this.posts = succ;
      }
    );
    console.log(this.posts);

  }

  // on submit of form, need to send a post to db of new info.
  updateProfile() {
    console.log(this.updateUser);
    const id = this.user.id;
    console.log(id + ' is the id you are appending');
    const url: string = 'http://localhost:8080/users/' + id;
    const data = {
      'firstName': this.updateUser.firstName,
      'lastName': this.updateUser.lastName,
      'gender': this.updateUser.gender,
      'phoneNumber': this.updateUser.phoneNumber,
      'DoB': this.updateUser.dateOfBirth
    };
    const header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post(url, data, header).subscribe(
      (succ: any) => {
        console.log(succ);
        this.user = succ;
        this.cookie.putObject('user', this.user);
        console.log(this.cookie.get('user'), 'is thine cookie');
        this.router.navigateByUrl('/home/profile');

      });
    (<any>$('#updateModal')).modal('show');

  }

  uploadPic() {
    let pic: any;
    pic = document.getElementById('picture');
    let files = [];
    // let filename: any;
    files = pic.files;

    const theFile: File = files[0];
    console.log(pic);
    console.log(theFile);
    const id = this.user.id;
    const url: string = 'http://localhost:8080/profilePictures/' + id;
    const formdata: FormData = new FormData();

    formdata.append('multipartFile', theFile);

    this.http.post(url, formdata).subscribe(
      (succ: any) => {
        console.log(succ);
        this.user = succ;
        this.cookie.putObject('user', this.user);
        console.log(this.cookie.get('user'), 'is thine cookie');
        window.location.reload();

      });
    (<any>$('#updateModal')).modal('show');
  }

  editModeToggle() {
    if (this.editMode) {
      this.editMode = false;
    } else {
      this.editMode = true;
    }
  }

  // need live update of fields from db.

  // onclick for reset password link needs to send password reset email.
  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
