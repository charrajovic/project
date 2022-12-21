import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  authenticated: boolean = false;

  constructor() { }

  authenticate(credentials, callback){
    if(credentials && credentials.username == 'user' && credentials.password == 'password1')
    {
      this.authenticated = true;
    } else {
      this.authenticated = false;
    }
    return callback && callback();
  }

}
