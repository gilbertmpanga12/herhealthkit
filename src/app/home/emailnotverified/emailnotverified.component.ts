import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emailnotverified',
  templateUrl: './emailnotverified.component.html',
  styleUrls: ['./emailnotverified.component.scss']
})
export class EmailnotverifiedComponent implements OnInit {
  requestNewConfirmationLink: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  sendConfirmationLink(): void{
    this.requestNewConfirmationLink = true;
    // do something async here
  }

  cancel(): void{
    this.requestNewConfirmationLink = false;
  }

}
