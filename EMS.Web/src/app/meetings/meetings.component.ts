import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

  constructor( private _router: Router) { }

  ngOnInit(): void {
  }

  showMeetings(){
    console.log("SHOW");
    this._router.navigateByUrl('/meeting/show');
  }

  createMeeting(){
    console.log("CREATE");
    this._router.navigateByUrl('/meeting/create');
  }

}
