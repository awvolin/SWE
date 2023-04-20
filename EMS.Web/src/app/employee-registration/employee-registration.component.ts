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
  designations : Set<string> = new Set();
  manager: {id: string, name: string} = {id: "", name: ""};
  roles : Set<string> = new Set();
  managers: Set<{id: string, name: string}> = new Set();
  submitted: boolean = false;
  constructor(private employeeService: EmployeeService, private router: Router) {
    // this.users = employeeService.users;
    for(let u of employeeService.users){
      this.designations.add(u.designation);
      this.roles.add(u.role);
      if(u.designation.toLowerCase() === 'manager'){
        this.managers.add({id: u.id, name: u.name});
      }
    }
    console.log(this.managers);
  }

  validateInput() {
    if(this.user.name === ''){
      return false;
    }
    if(this.user.email === ''){
      return false;
    }
    if(this.user.designation === ''){
      return false;
    }
    if(this.user.role === ''){
      return false;
    }
    if(this.user.managerId === ''){
      return false;
    }
    return true;
  }
  addEmployee() {
    this.submitted = true;
    this.user.managerId = [...this.managers].find(m => m.name === this.manager.toString())?.id || "abq";
    console.log(this.user);
    console.log(this.manager);
    if (this.validateInput()) {
      this.employeeService.addEmployee(this.user);
      this.router.navigate(['/dashboard']);
    }
  }
}
