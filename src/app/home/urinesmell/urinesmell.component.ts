import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urinesmell',
  templateUrl: './urinesmell.component.html',
  styleUrls: ['./urinesmell.component.scss']
})
export class UrinesmellComponent implements OnInit {
  urineSmell: string[] = [
    'Musty', 'Foul', 'Sweet smelling urine'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
