import { Component, OnInit } from '@angular/core';
import { MeetingServiceService } from '../services/meeting-service.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Meeting } from '../models/meeting';
import * as moment from 'moment';

@Component({
  selector: 'app-create-meetings',
  templateUrl: './create-meetings.component.html',
  styleUrls: ['./create-meetings.component.css']
})
export class CreateMeetingsComponent implements OnInit {

  constructor(private meetingService: MeetingServiceService, private router: Router) {
  }

  ngOnInit(): void {
  }

  meeting: Meeting = new Meeting({});
  submitted: boolean = false;

  userSelects : Array<{id: string, name: string}> = new Array();
  userSelectsString = '';
  suggestions = [
    { name: "Peter Parker", id: "abc" },
      { name: "Tony Stark", id: "abd" },
      { name: "Bruce Banner", id: "abe" },
      { name: "Natasha Romanoff", id: "abf" },
      { name: "Steve Rogers", id: "abg" },
      { name: "Thor Odinson", id: "abh" },
      { name: "Barton Clint", id: "abi" },
      { name: "Wanda Maximoff", id: "abj" },
      { name: "Victor Shade", id: "abk" },
      { name: "Stephen Strange", id: "abl" },
      { name: "Scott Lang", id: "abm" },
      { name: "Star Lord", id: "abn" },
      { name: "Groot", id: "abo" },
      { name: "Sam Wilson", id: "abp" },
  ];

  show: boolean = false;

  suggest() {
    this.show = true;
  }

  isSelected(s:any) {
   return this.userSelects.findIndex((item) => item.id === s.id) > -1 ? true : false;
  }

  selectSuggestion(s: any) {
    this.userSelects.find((item) => item.id === s.id) ? 
    this.userSelects = this.userSelects.filter((item) => item.id !== s.id) :
    this.userSelects.push(s);
    // this.assignToNgModel();
  }

  deleteSelects(s: any) {
    this.userSelects = this.userSelects.filter((item) => item.id !== s.id);
    // this.assignToNgModel();
  }

  assignToNgModel() {
    this.userSelectsString = '';
    this.userSelects.map((item) => this.userSelectsString += item.name + ' ');
  }

  validateInput(){
    if(this.meeting.title === ''){
      return false;
    }
    if(this.meeting.date === ''){
      return false;
    }
    if(this.meeting.startTime === ''){
      return false;
    }
    if(this.meeting.duration === undefined || this.meeting.duration === "" || this.meeting.duration === "0"){
      return false;
    }
    if(this.meeting.invited.length === 0){
      return false;
    }
    //check correct date and time
    const dateTime = new Date(this.meeting.date + ' ' + this.meeting.startTime);
    const currentDateTime = new Date();
    const diff = moment(dateTime).diff(moment(currentDateTime), 'seconds');
    // const milisecondsDiff = dateTime.getMilliseconds() - currentDateTime.getMilliseconds();
    console.log(dateTime, currentDateTime);
    console.log(diff);
    if(diff < 0){
      return false;
    }
    //TODO: check for meeting conflicts
    return true;
  }

  createMeet() {
    this.submitted = true;
    this.show = false;
    console.log(this.userSelects);
    this.meeting.invited = this.userSelects;
    console.log(this.meeting);
    if(this.validateInput()){
      this.router.navigate(['/dashboard']);
      console.log("Meeting added successfully");
    }
    
    // if (this.user.name !== '') {
    //   this.meetingService.addEmployee(this.user);
    //   this.router.navigate(['/dashboard']);
    // }
  }

}
