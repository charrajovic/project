import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../shared/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    try {
      this.users = this.route.snapshot.data["users"];
      console.log(this.users[0])
    } catch (error) {
      console.log(error)
    }

  }

}
