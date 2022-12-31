import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Title} from "@angular/platform-browser";
import { CookieService } from 'ngx-cookie-service';

import {UserService} from './user.service';

import { User } from '../shared/user.model';
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
  constructor(private route: ActivatedRoute,private titleService:Title,private userService: UserService,private fb: FormBuilder) {
    this.titleService.setTitle("Gestion users");
  }

  ngOnInit() {
    try {
      this.initUser();
      this.users = this.route.snapshot.data["users"];
      this.initUser();
      console.log(this.users)
    } catch (error) {
      console.log(error)
    }

  }

  createForm()
  {
    this.userForm = this.fb.group({
      username: ['',Validators.required],
      password: '',
      enable: ''
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
    this.userForm.controls["enable"].setValue(1)
    const p = this.userForm.value;
    console.log(p)
    this.userService.add(p).subscribe(
      res => {
        this.initUser();
        this.loadUsers();
      }
    );
  }

  updateUser()
  {
    const p = this.userForm.value;
    this.userService.update(this.selectedUser).subscribe(
      res => {
        this.initUser();
        this.loadUsers();
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
  }

}
