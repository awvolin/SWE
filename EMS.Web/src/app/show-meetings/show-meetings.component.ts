import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import * as moment from 'moment';
import { Context } from 'vm';


@Component({
  selector: 'app-show-meetings',
  templateUrl: './show-meetings.component.html',
  styleUrls: ['./show-meetings.component.css']
})
export class ShowMeetingsComponent implements OnInit {

  ngOnInit(): void {
      
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };

  handleDateClick(arg: Context) {
    alert('date click! ' + arg);
  }

}
