import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taketest',
  templateUrl: './taketest.component.html',
  styleUrls: ['./taketest.component.scss']
})
export class TaketestComponent implements OnInit {
  symptoms: string[] = ['Back pain', 'Lower abdomen pain', 
  'Pelvic pain', 'Burning sensation during urination'];
  constructor() { }

  ngOnInit(): void {
  }

}
