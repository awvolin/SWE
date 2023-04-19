import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm: FormGroup;
  public resetPasswordForm: FormGroup;
  public errorMsg: string = "";
  public resetPasswordClicked: boolean = false;
  public userEmail: string = "";
  @Output() public loggedInEvent = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required),
    });
    this.resetPasswordForm = this.formBuilder.group({
      password: new FormControl("", Validators.required),
      confirmPassword: new FormControl("", Validators.required),
    });
  }
  login() {
    if (this.loginForm.valid) {
      var res = this.loginService.login(this.loginForm.controls["email"].value, this.loginForm.controls["password"].value);
      if (res.status == 200) {
        this.loggedInEvent.emit();
      }
      else {
        this.errorMsg = res.message;
      }
    }
    else {
      if (this.loginForm.controls["email"].invalid) {
        this.errorMsg = "Email is invalid!!";
      }
      else {
        this.errorMsg = "Email and password are required!!!";
      }
    }

  }

  showResetPasswordForm() {
    if (this.loginForm.controls["email"].valid) {
      this.userEmail = this.loginForm.controls["email"].value;
      var res = this.loginService.findUserByEmail(this.loginForm.controls["email"].value);
      if (res.status == 200) {
        this.resetPasswordClicked = true;
      }
      else {
        this.errorMsg = "User doesn't exist!!";
      }
    }
    else {
      this.errorMsg = "Email is invalid!!";
    }
  }

  resetPassword() {
    if (this.resetPasswordForm.controls["password"].value !== this.resetPasswordForm.controls["confirmPassword"].value) {
      this.errorMsg = "Confirm Password doesn't match";
      return;
    }
    if (this.resetPasswordForm.valid) {
      var res = this.loginService.resetPassword(this.userEmail, this.resetPasswordForm.controls["password"].value);
      if (res.status == 200) {
        this.loggedInEvent.emit();
      }
      else {
        this.errorMsg = res.message;
      }
    }
    else {
      this.errorMsg = this.resetPasswordForm.controls["password"].invalid ? "Password is required" : "Confirm Password is required";
    }
  }


}
