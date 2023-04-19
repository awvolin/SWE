import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Console } from 'console';
import { User } from '../models/user';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: User | undefined;
  peers: User[] = [];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.activatedRoute.url.subscribe(url => {
      let empId = this.activatedRoute.snapshot.paramMap.get('id') || undefined;
      this.employee = this.employeeService.getEmployeeById(empId || "123");
      this.peers = this.employeeService.getReportingEmployees(empId || "123");
    });
  }
}
