import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-urinesmell',
  templateUrl: './urinesmell.component.html',
  styleUrls: ['./urinesmell.component.scss']
})
export class UrinesmellComponent implements OnInit {
  urineSmell: string[] = [
    'Musty', 'Foul', 'Sweet smelling urine'
  ];
  constructor(public service: MainService) { }

  ngOnInit(): void {
  }
  
  

}
