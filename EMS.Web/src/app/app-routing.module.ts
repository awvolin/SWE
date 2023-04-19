import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';

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
    path: 'employee/:id', component: EmployeeDetailsComponent, data: { title: '' },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
