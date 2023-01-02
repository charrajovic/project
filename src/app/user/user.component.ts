import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Title} from "@angular/platform-browser";
import { CookieService } from 'ngx-cookie-service';

import {UserService} from './user.service';

import { User } from '../shared/user.model';
import { Role } from '../shared/roles.model';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  operation: string = 'add';
  selectedUser: User;
  userForm: FormGroup;
  users: User[];
  check: boolean = false;
  auth: any;
  constructor(private route: ActivatedRoute,private titleService:Title,private userService: UserService,private fb: FormBuilder,private cookieService: CookieService) {
    this.titleService.setTitle("Gestion users");
  }

  ngOnInit() {
    const response = this.cookieService.get('response');
    this.auth = JSON.parse(response);
    console.log(this.auth.name);
    try {

      this.initUser();
      this.users = this.route.snapshot.data["users"];
      this.initUser();
      console.log(this.users)
    } catch (error) {
      console.log(error)
    }

    this.initradio();
    this.initenable();
    console.log(this.userForm.controls["enable"])

  }

  createForm()
  {
    this.userForm = this.fb.group({
      username: ['',Validators.required],
      password: '',
      enable: '',
      roles: ['',Validators.required]
    })
  }

  loadUsers()
  {
    this.userService.getAll().subscribe(
      data => {this.users = data},
      error => {console.log('error')},
      () => {console.log('Loading data was done.')}
    );
  }

  addUser()
  {
    console.log(this.userForm.controls['roles'].value)
    const rol: Role = [{
      id: 1,
      name: this.userForm.controls['roles'].value
  }];
  if(this.userForm.controls["enable"].value == null)
  {
      this.userForm.controls["enable"].setValue(0);
  }
  console.log(this.userForm.controls["enable"].value == null)
    //this.userForm.controls["enable"].setValue(1)
    this.userForm.controls["roles"].setValue(rol)

    console.log(rol)
    const p = this.userForm.value;
    console.log(this.userForm)
    this.userService.add(p).subscribe(
      res => {
        this.initUser();
        this.loadUsers();
        this.operation = 'add';
        this.initradio();
        this.initenable();
      },
      err => {
    if(err.status==500)
    console.log(err)
  }
    );
  }

  updateUser()
  {
    console.log(this.selectedUser)
    const p = this.userForm.value;
    if(this.userForm.controls["enable"].value == null)
    {
        this.selectedUser['enable']= 0;
    }
    else
    {
      this.selectedUser['enable'] = this.userForm.controls["enable"].value
    }
    console.log(this.userForm.controls["enable"].value == null)
    console.log(this.userForm.controls["enable"])
    console.log(this.userForm.controls['roles'].value)
    console.log(this.selectedUser['roles'][0].name=this.userForm.controls['roles'].value)

    this.userService.update(this.selectedUser).subscribe(
      res => {
        this.initUser();
        this.loadUsers();
        this.operation = 'add';
        this.initcheck();
        this.initradio();
        this.initenable();
      }
    );
  }

  deleteUser()
  {
    const p = this.userForm.value;
    this.userService.delete(this.selectedUser["id"] as number).subscribe(
      res => {
        this.selectedUser = new User();
        this.loadUsers();
      }
    );
  }

  initUser()
  {
    this.selectedUser = new User();
    this.createForm();
  }


  adding()
  {
    this.selectedUser = new User();
    this.initradio();
  }

  initcheck()
  {
    this.check = false;
  }

  NoPass()
  {
    console.log(this.check)
    if(!this.check)
    {
      this.userForm.controls['password'].enable();
    }
    else
    {
      console.log(this.userForm.controls['password'].setValue(null))
      this.userForm.controls['password'].disable();
    }
  }

  edit()
  {
    var role = 'ROLE_USER'
    console.log(this.selectedUser['roles'][0].name)
    for (let i = 0; i < this.selectedUser['roles'].length; i++) {
      if(this.selectedUser['roles'][i].name!=role)
      {
        role=this.selectedUser['roles'][i].name
      }
    }
    this.userForm.controls['roles'].setValue(role)
    console.log(this.selectedUser['enable'])
    this.userForm.controls["enable"].setValue(this.selectedUser['enable']);
  }

  initradio()
  {
    this.userForm.controls['roles'].setValue('ROLE_USER')
  }

  initenable()
  {
    this.userForm.controls["enable"].setValue(1);
  }

}
