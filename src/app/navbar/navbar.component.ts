import { Component,Input,Output,EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input()
  showSideBar: boolean;
  @Output()
  showSideBarChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private cookieService: CookieService)
  {
    this.showSideBar=false;
    this.showSideBarChange;
  }
  afficherSideBar()
  {
    this.showSideBar = !this.showSideBar;
    this.showSideBarChange.emit(this.showSideBar);
  }
  logout(){
    
  }

  hasRoleUser(){
    let hasRole: boolean = false;
    JSON.parse(this.cookieService.get('response')).authorities.forEach(item => {
      if (item.authority === 'ROLE_USER') {
        hasRole = true;
      }
    });
    return hasRole;
  }

  hasRoleAdmin(){
    let hasRole: boolean = false;
    JSON.parse(this.cookieService.get('response')).authorities.forEach(item => {
      if (item.authority === 'ROLE_ADMIN') {
        hasRole = true;
      }
    });
    return hasRole;
  }
}
