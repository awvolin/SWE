import { Time } from "@angular/common";

export class Meeting {
    id: string;
    title: string;
    description: string;
    invited: Array<{id: string, name: string}>;
    date: string;
    startTime: string;
    duration: string;
    constructor(meeting: any) {
      this.title = meeting.name || "";
      this.description = meeting.description || "";
      this.invited = meeting.invited || "";
      this.id = meeting.id || "";
      this.date = meeting.date || "";
      this.startTime = meeting.startTime || "";
      this.duration = meeting.duration || "";
    }
  }