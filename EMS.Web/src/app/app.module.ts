import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { CreateMeetingsComponent } from './create-meetings/create-meetings.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { ShowMeetingsComponent } from './show-meetings/show-meetings.component';
import { MeetingServiceService } from './services/meeting-service.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';  
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    EmployeeRegistrationComponent,
    DashboardComponent,
    EmployeeDetailsComponent,
    CreateMeetingsComponent,
    MeetingsComponent,
    ShowMeetingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    FontAwesomeModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  providers: [LoginService, EmployeeService, MeetingServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
