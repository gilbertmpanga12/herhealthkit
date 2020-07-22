import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-physicianaccount',
  templateUrl: './physicianaccount.component.html',
  styleUrls: ['./physicianaccount.component.scss']
})
export class PhysicianaccountComponent implements OnInit {

  constructor(public service: MainService) { }

  ngOnInit(): void {
  }

}
