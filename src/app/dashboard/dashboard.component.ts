import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private titleService:Title)
  {
    this.titleService.setTitle("Dashboard");
  }

}
