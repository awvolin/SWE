import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Console } from 'console';
import { User } from '../models/user';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent {
  user: User = new User({});
  submitted: boolean = false;
  constructor(private employeeService: EmployeeService, private router: Router) {

  }
  addEmployee() {
    this.submitted = true;
    if (this.user.name !== '') {
      this.employeeService.addEmployee(this.user);
      this.router.navigate(['/dashboard']);
    }
  }
}
