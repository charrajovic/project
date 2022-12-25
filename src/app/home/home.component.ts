import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(){
    document.body.style.backgroundImage = "";
    document.body.style.backgroundRepeat = "";
    document.body.style.backgroundSize = "";
    document.body.style.height="";
    document.getElementsByTagName("html")[0].style.height='';
  }

}
