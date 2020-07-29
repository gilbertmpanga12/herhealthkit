import { Component, OnInit } from '@angular/core';
import {Metrics} from '../../data';
@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  metrics: any = Metrics;
  constructor() { }

  ngOnInit(): void {
  }

}
