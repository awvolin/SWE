
import { Injectable, Inject } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class LoginService {
  users: User[];
  loggedInUser: User | undefined;
  constructor() {
    this.users = [
      { name: "Peter Parker", email: "peterparker@gmail.com", password: "Peter123", role: "employee", managerId: "abd", id: "abc" } as User,
      { name: "Tony Stark", email: "iamironman@gmail.com", password: "Jarvis123", role: "employee", managerId: "abq", id: "abd" } as User,
      { name: "Bruce Banner", email: "brucebanner@gmail.com", password: "Bruce123", role: "employee", managerId: "abq", id: "abe" } as User,
      { name: "Natasha Romanoff", email: "blackwidow@gmail.com", password: "Ledger123", role: "employee", managerId: "abg", id: "abf" } as User,
      { name: "Steve Rogers", email: "steverogers@gmail.com", password: "CA123", role: "employee", managerId: "abq", id: "abg" } as User,
      { name: "Thor Odinson", email: "thor@gmail.com", password: "Thor123", role: "employee", managerId: "abq", id: "abh" } as User,
      { name: "Barton Clint", email: "clintbarton@gmail.com", password: "Clint123", role: "employee", managerId: "abg", id: "abi" } as User,
      { name: "Wanda Maximoff", email: "wanda@gmail.com", password: "Wanda123", role: "employee", managerId: "abg", id: "abj" } as User,
      { name: "Victor Shade", email: "vision@gmail.com", password: "Vision123", role: "employee", managerId: "abd", id: "abk" } as User,
      { name: "Stephen Strange", email: "drstrange@gmail.com", password: "Strange123", role: "employee", managerId: "abq", id: "abl" } as User,
      { name: "Scott Lang", email: "scottlang@gmail.com", password: "Antman123", role: "employee", managerId: "abg", id: "abm" } as User,
      { name: "Star Lord", email: "peterparker@gmail.com", password: "Frootloops123", role: "employee", managerId: "abd", id: "abn" } as User,
      { name: "Groot", email: "iamgroot@gmail.com", password: "Groot123", role: "employee", managerId: "abn", id: "abo" } as User,
      { name: "Sam Wilson", email: "samwilson@gmail.com", password: "Sam123", role: "employee", managerId: "abg", id: "abp" } as User,
      { name: "Nick Fury", email: "nickfury@gmail.com", password: "Fury123", role: "admin", managerId: "", id: "abq" } as User
    ];
  }

  login(email: string, password: string) {
    let user = this.users.find(item => item.email == email);
    if (user) {
      if (user.password == password) {
        this.loggedInUser = user;
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
