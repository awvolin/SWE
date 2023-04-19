
import { Injectable, Inject } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class EmployeeService {
  users: User[];
  constructor() {
    this.users = [
      { name: "Peter Parker", email: "peterparker@gmail.com", designation: "Team Member", password: "Peter123", role: "employee", managerId: "abd", id: "abc" } as User,
      { name: "Tony Stark", email: "iamironman@gmail.com", designation: "Manager", password: "Jarvis123", role: "employee", managerId: "abq", id: "abd" } as User,
      { name: "Bruce Banner", email: "brucebanner@gmail.com", designation: "Manager", password: "Bruce123", role: "employee", managerId: "abq", id: "abe" } as User,
      { name: "Natasha Romanoff", email: "blackwidow@gmail.com", designation: "Team Member", password: "Ledger123", role: "employee", managerId: "abg", id: "abf" } as User,
      { name: "Steve Rogers", email: "steverogers@gmail.com", designation: "Manager", password: "CA123", role: "employee", managerId: "abq", id: "abg" } as User,
      { name: "Thor Odinson", email: "thor@gmail.com", designation: "Manager", password: "Thor123", role: "employee", managerId: "abq", id: "abh" } as User,
      { name: "Barton Clint", email: "clintbarton@gmail.com", designation: "Team Member", password: "Clint123", role: "employee", managerId: "abg", id: "abi" } as User,
      { name: "Wanda Maximoff", email: "wanda@gmail.com", designation: "Team Member", password: "Wanda123", role: "employee", managerId: "abg", id: "abj" } as User,
      { name: "Victor Shade", email: "vision@gmail.com", designation: "Team Member", password: "Vision123", role: "employee", managerId: "abd", id: "abk" } as User,
      { name: "Stephen Strange", email: "drstrange@gmail.com", designation: "Manager", password: "Strange123", role: "employee", managerId: "abq", id: "abl" } as User,
      { name: "Scott Lang", email: "scottlang@gmail.com", designation: "Team Member", password: "Antman123", role: "employee", managerId: "abg", id: "abm" } as User,
      { name: "Star Lord", email: "peterparker@gmail.com", designation: "Team Member", password: "Frootloops123", role: "employee", managerId: "abd", id: "abn" } as User,
      { name: "Groot", email: "iamgroot@gmail.com", designation: "Team Member", password: "Groot123", role: "employee", managerId: "abn", id: "abo" } as User,
      { name: "Sam Wilson", email: "samwilson@gmail.com", designation: "Team Member", password: "Sam123", role: "employee", managerId: "abg", id: "abp" } as User,
      { name: "Nick Fury", email: "nickfury@gmail.com", designation: "Admin", password: "Fury123", role: "admin", managerId: "", id: "abq" } as User
    ];
  }

  addEmployee(newUser: User) {
    newUser.id = new Date().toString();
    this.users.push(newUser);
  }

  getEmployeeById(empId: string) {
    return this.users.find(emp => emp.id == empId);
  }

  getReportingEmployees(empId: string) {
    let employee = this.getEmployeeById(empId);
    if (employee?.role == "admin") {
      return this.users.filter(user => user.id != empId).map(emp => new User(emp));
    }
    else if (employee?.designation == "Manager") {
      return this.users.filter(user => user.managerId == empId).map(emp => new User(emp));
    }
    else {
      return this.users.filter(user => user.managerId == employee?.managerId && user.id != empId).map(emp => new User(emp));
    }
  }

}
