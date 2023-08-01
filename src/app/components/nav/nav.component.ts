import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../..//services/auth-service/auth.service';

/**
 * @author
 * @description
 */
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  showMenu = false;
  isUserLoggedIn = false;
  username = '';

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.auth.isUserLoggedIn();
  }

  logOut($event: Event) {
    $event.preventDefault();
    this.auth.logout();
    this.router.navigate(['login']);
  }

  signIn($event: Event) {
    $event.preventDefault();
    this.router.navigate(['login']);
  }

  signUp($event: Event) {
    $event.preventDefault();
    this.router.navigate(['signup']);
  }

}
