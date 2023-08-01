import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user-service/user.service';

/**
 * @author
 * @description
 */
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  title = 'Users';
  users: Array<User> = [];

  constructor(private userService: UserService, protected route: Router) { }

  ngOnInit(): void { }

  deleteUser(user: User) {
    this.userService.deleteUser(user);
  }

  updateUser() {

  }

  showUserDetail() {

  }

}
