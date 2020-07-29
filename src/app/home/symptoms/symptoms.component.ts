import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.scss']
})
export class SymptomsComponent implements OnInit {
  symptoms: string[] = ['Back pain', 'Lower abdomen pain', 
  'Pelvic pain', 'Burning sensation during urination'];
  constructor(public service: MainService) { }

  ngOnInit(): void {
  }

}
