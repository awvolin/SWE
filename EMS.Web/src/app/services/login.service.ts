
import { Injectable, Inject } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users: User[];
  loggedInUser: User | undefined;
  constructor(private http: HttpClient) {
    this.users = [
      { name: "Peter Parker", email: "peterparker@gmail.com", designation: "Team Member",password: "Peter123", role: "employee", managerId: "abd", id: "abc" } as User,
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

    console.log(this.users);

    this.getUsers().subscribe(response => {
      this.users = response.data;
    });

    console.log(this.users);
  }

  //Http Client get method
  public getUsers(): Observable<any> {
    const url = 'https://localhost:7060/api/Employee';
    return this.http.get<any>(url);
  }

  login(email: string, password: string) {
    let user = this.users.find(item => item.email == email);
    if (user) {
      if (user.password == password) {
        this.loggedInUser = new User(user);
        return { status: 200, message: "LoggedIn Succesfully" };
      }
      else {
        return { status: 400, message: "Password doesn't match" }
      }
    }
    else {
      return { status: 400, message: "User does not exist" };
    }
  }

  logout() {
    this.loggedInUser = undefined;
  }

  resetPassword(email: string, password: string) {
    let user = this.users.find(item => item.email == email);
    if (user) {
      this.users[this.users.indexOf(user)].password = password;
      this.loggedInUser = user;
      return { status: 200, message: "Password reset successful" };
    }
    else {
      return { status: 400, message: "User does not exist" };
    }
  }
  findUserByEmail(email: string) {
    let user = this.users.find(item => item.email == email);
    if (user) {
      return { status: 200 };
    }
      return { status: 400 };
  }
}
