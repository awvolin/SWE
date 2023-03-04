import { Component } from '@angular/core';
import { Console } from 'console';
import { User } from './models/user';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WorkforcePro';
  user: User | undefined;
  showDashboard: boolean = false;

  constructor(private loginService: LoginService) {

  }
  logIn() {
    this.showDashboard = true;
    this.user = this.loginService.loggedInUser;
  }
}
