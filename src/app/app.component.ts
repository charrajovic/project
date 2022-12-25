import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private appService: AppService,
              private router: Router,
              private cookieService: CookieService){
                document.body.style.backgroundImage = "";
                document.body.style.backgroundRepeat = "";
                document.body.style.backgroundSize = "";
                document.body.style.height="";
                document.getElementsByTagName("html")[0].style.height='';
              }

  ngOnInit(){

    const myCookie = this.cookieService.get('response');
    console.log(myCookie)

    if (myCookie == null || myCookie == '') {
        this.router.navigateByUrl('/login');
    }
    else {

    }
    /*if(!this.appService.authenticated){
      this.router.navigateByUrl('/login');
    }
    else {
        this.router.navigateByUrl('/home');
    }*/
  }

}
