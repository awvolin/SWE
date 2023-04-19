import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './nav-bar/navbar.component';
import { LoginService } from './services/login.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeService } from './services/employee.service';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    EmployeeRegistrationComponent,
    DashboardComponent,
    EmployeeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    FontAwesomeModule
  ],
  providers: [LoginService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
