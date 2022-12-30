import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router'
import { API_URLS } from './config/api.url.config';

@Injectable()
export class AppService {

  authenticated: boolean = false;

  constructor(private http: HttpClient, private cookieService: CookieService,private router: Router) { }

  authenticate(credentials, callback) {
    if(credentials){
      const token = btoa(credentials.username + ':' + credentials.password);
      this.cookieService.set('token', token);
      console.log(token)
      this.http.get(API_URLS.USER_URL).subscribe(response => {
          if (response && response['name']) {
              this.authenticated = true;
              this.router.navigateByUrl('/home')
          } else {
              this.authenticated = false;
          }
          console.log(response)
          this.cookieService.set('response', JSON.stringify(response),6);
          localStorage.setItem("session", JSON.stringify(response));
          return callback && callback();
      });
    }
    else {
      this.authenticated = false;
    }
  }

  logout(callback){
    return callback && callback();
  }

}
