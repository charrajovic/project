import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AppService} from '../app.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formGroup: FormGroup;
  credentials = {
    username: '',
    password: ''
  }

  constructor(private fb: FormBuilder,
              private appService: AppService,
              private router: Router){

            document.body.style.backgroundImage = "url('../../top.jpg')";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundSize = "100% 100%";
            document.body.style.height="100%";
            document.getElementsByTagName("html")[0].style.height='100%';


  }

  ngOnInit(){
    this.formGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login(){
    this.appService.authenticate(this.credentials,() => {
      //this.router.navigateByUrl('/home');
    })
  }

}
