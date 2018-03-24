import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpClientConfigService {

  configUrl = 'assets/co'//stopped here

  constructor(private http: HttpClient) { }

}
