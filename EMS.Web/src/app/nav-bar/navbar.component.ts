import { Component, EventEmitter, Output } from '@angular/core';
import { Console } from 'console';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  loggedInUser: User | undefined;
  @Output() public loggedOutEvent = new EventEmitter();
  constructor(private loginService: LoginService) {
    this.loggedInUser = loginService.loggedInUser;
  }

  logout() {
    this.loginService.logout();
    this.loggedOutEvent.emit();
  }
}
