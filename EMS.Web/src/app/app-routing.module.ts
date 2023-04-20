import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { CreateMeetingsComponent } from './create-meetings/create-meetings.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { ShowMeetingsComponent } from './show-meetings/show-meetings.component';

export const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: 'dashboard', component: DashboardComponent, data: { title: '' },
  },
  {
    path: 'addhire', component: EmployeeRegistrationComponent, data: { title: '' },
  },
  {
    path: 'meeting', component: MeetingsComponent, data: { title: '' },
  },
  {
    path: 'meeting/show', component: ShowMeetingsComponent, data: { title: '' },
  },
  {
    path: 'meeting/create', component: CreateMeetingsComponent, data: { title: '' },
  },
  {
    path: 'employee/:id', component: EmployeeDetailsComponent, data: { title: '' },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
