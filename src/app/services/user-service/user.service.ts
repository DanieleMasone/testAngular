import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';


/**
 * @author
 * @description
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {

  path = '';

  users: Array<User> = [
    {
      id: 1,
      name: 'Daniele',
      lastname: 'Masone',
      email: 'pippo.com',
      fiscalcode: 'IKSFHISUDH',
      province: 'Milano',
      phone: '8327647893',
      age: 31
    },
    {
      id: 2,
      name: 'Fabio',
      lastname: 'Log',
      email: 'pluto.com',
      fiscalcode: 'IKSFHISUDH',
      province: 'Milano',
      phone: '345345',
      age: 30
    }];

  constructor(protected httpClient: HttpClient) { }

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    return this.users.find(user => user.id === id);
  }

  deleteUser(user: User) {
    const index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }

  updateUser(user: User) {
    const index = this.users.findIndex((v) => v.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  createUser(user: User) {
    user.id = this.users.length + 1;
    this.users.push(user);
  }

}
