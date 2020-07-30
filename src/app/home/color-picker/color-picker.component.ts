import { Component, OnInit } from '@angular/core';
import {Metrics} from '../../data';
import { MainService } from 'src/app/main.service';
@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  metrics: any = Metrics;
  constructor(public service: MainService) { }

  ngOnInit(): void {
  }

}
