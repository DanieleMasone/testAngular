import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/**
 * @author
 * @description
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  path = '';

  private isUserLogged = !!localStorage.getItem('token');

  constructor(private httpClient: HttpClient) { }

  isUserLoggedIn() {
    return this.isUserLogged;
  }

  signUp(email: string, password: string): boolean {
    // TODO: Add logic

    return true;
  }

  signIn(username: string, email: string, password: string): boolean {
    // TODO: Add logic

    return true;
  }

  logout() {
    localStorage.removeItem('token');
  }

}
