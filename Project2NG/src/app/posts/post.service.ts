import { Injectable } from '@angular/core';
import { Post } from '../Post';
//Adding in the HTTP== Import
import { Http } from '@angular/http';
//Observable Import for async listener 
import { Observable } from 'rxjs/Observable';
// it's the rxjs library Marab was talking about that one day
import 'rxjs/add/operator/map';


@Injectable()
export class PostService {

  //Servlet URL wanna contact to get Post list
  private url='http://localhost:8080/posts';

  //method to get Servlet response 
  getPostsLive(): Observable<Post>{
    //return a list of observable posts from the URL
    //for more information please refer to https://angular.io/tutorial/toh-pt6
    return this.http.get(this.url).map(resp => resp.json())
}
 /** Log a HeroService message with the MessageService */
 private log(message: string) {
  console.log('PostService: ' + message);
}
  //DI
  constructor(private http:Http) { }


}
