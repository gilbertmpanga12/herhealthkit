import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-registrationcenter',
  templateUrl: './registrationcenter.component.html',
  styleUrls: ['./registrationcenter.component.scss']
})
export class RegistrationcenterComponent implements OnInit {

  constructor(public service: MainService) { }

  ngOnInit(): void {
  }

}
