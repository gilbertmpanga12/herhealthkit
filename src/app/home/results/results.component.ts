import { Component, OnInit } from '@angular/core';
import { Metrics } from 'src/app/data';

declare const document: any;

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  tables = Metrics;
  
  ngOnInit(): void {
   
  }

  printDocument(): void{
    window.print();
  }
}
