/// <reference path="nav-bar/navbar.component.ts" />
import { Component } from '@angular/core';
import { Console } from 'console';
import { User } from './models/user';
import { LoginService } from './services/login.service';
import { faHome, faCalendar, faUserPlus } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WorkforcePro';
  user: User | undefined;
  showDashboard: boolean = false;
  faHome = faHome;
  faCalendar = faCalendar;
  faUserPlus = faUserPlus;
  constructor(private loginService: LoginService) {

  }
  logIn() {
    this.showDashboard = true;
    this.user = this.loginService.loggedInUser;
  }
  logOut() {
    this.showDashboard = false;
    this.user = this.loginService.loggedInUser;
  }
}
