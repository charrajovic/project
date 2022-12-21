import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'project';
  //showHiddenSideBar: boolean =false;

  constructor(private appService: AppService,
              private router: Router){

  }

  /*onShowSideBarChange(showHiddenSideBar)
  {
    this.showHiddenSideBar = showHiddenSideBar;
  }*/

  ngOnInit()
  {
    if(!this.appService.authenticated)
    {
      this.router.navigateByUrl('/login');
    } else {
      this.router.navigateByUrl('/home');
    }
  }
}
