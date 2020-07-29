import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urinecolor',
  templateUrl: './urinecolor.component.html',
  styleUrls: ['./urinecolor.component.scss']
})
export class UrinecolorComponent implements OnInit {
  urineColor: string[] = [
    'Cloudy or milky', 'Dark yellow', 'Dark brown', 'Transparent or pink'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
