import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_CONFIG, ApiConfig } from '../../models/environment.api';


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

  constructor(protected httpClient: HttpClient,
    @Inject(API_CONFIG) private api: ApiConfig) {
    this.path = this.api.host + this.api.path;
  }

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
