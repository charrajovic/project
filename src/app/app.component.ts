import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  showHiddenSideBar: boolean =false;

  onShowSideBarChange(showHiddenSideBar)
  {
    this.showHiddenSideBar = showHiddenSideBar;
  }
}
