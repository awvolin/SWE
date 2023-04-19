import { Component } from '@angular/core';
import { Console } from 'console';
import { User } from '../models/user';
import { EmployeeService } from '../services/employee.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  employees: User[] = [];
  currentUser: User | undefined;
  constructor(private employeeService: EmployeeService, private loginService: LoginService) {
    this.currentUser = this.loginService.loggedInUser;
  }

  ngOnInit() {
    this.getReportingEmployees();
  }

  getReportingEmployees() {
    this.employees = this.employeeService.getReportingEmployees(this.currentUser?.id || "abq");
  }
}
