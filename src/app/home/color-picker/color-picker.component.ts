import { Component, OnInit } from '@angular/core';
import {Metrics} from '../../data';
import { MainService } from 'src/app/main.service';

interface Metrics{
  title: string;
  parameters: string[];
}

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  metrics: any = Metrics;
  leu: Metrics = {title: "", parameters: []};
  pro: Metrics = {title: "", parameters: []};
  sg: Metrics = {title: "", parameters: []};
  ket: Metrics= {title: "", parameters: []};
  blo: Metrics = {title: "", parameters: []};
  ph: Metrics = {title: "", parameters: []};
  bil: Metrics = {title: "", parameters: []};
  glu: Metrics = {title: "", parameters: []};
  uro: Metrics = {title: "", parameters: []};
  nit: Metrics = {title: "", parameters: []};
  uiToggle: Set<string> = new Set();
  constructor(public service: MainService) { }

  ngOnInit(): void {
  }

  pickColor(title: string, parameter){
    switch(title){
      case "LEU 120S":
          this.leu['title'] = "LEU 120S";
          this.leu['parameters'].push(parameter);
          this.leu['parameters'] = [...new Set(this.leu['parameters'])];
          break;
      case "NIT 60S":
          this.nit['title'] = "NIT 60S";
          this.nit['parameters'].push(parameter);
          this.nit['parameters'] = [...new Set(this.nit['parameters'])];
          break;
      case "URO 60S":
          this.uro['title'] = "URO 60S";
          this.uro['parameters'].push(parameter);
          this.uro['parameters'] = [...new Set(this.uro['parameters'])];
          break;
      case "PRO 60S":
          this.pro['title'] = "PRO 60S";
          this.pro['parameters'].push(parameter);
          this.pro['parameters'] = [...new Set(this.pro['parameters'])];
          break;
      case "PH 60S":
          this.ph['title'] = "PH 60S";
          this.ph['parameters'].push(parameter);
          this.ph['parameters'] = [...new Set(this.pro['parameters'])];
          break;
      case "BLO 60S":
          this.blo['title'] = "BLO 60S";
          this.blo['parameters'].push(parameter);
          this.blo['parameters'] = [...new Set(this.blo['parameters'])];
          break;
      case "SG 45S":
          this.sg['title'] = "SG 45S";
          this.sg['parameters'].push(parameter);
          this.sg['parameters'] = [...new Set(this.sg['parameters'])];
          break;
      case "KET 40S":
          this.ket['title'] = "KET 40SS";
          this.ket['parameters'].push(parameter);
          this.ket['parameters'] = [...new Set(this.ket['parameters'])];
          break;
      case "BIL 30S":
          this.bil['title'] = "BIL 30S";
          this.bil['parameters'].push(parameter);
          this.bil['parameters'] = [...new Set(this.bil['parameters'])];
          break;
      case "GLU 30S":
          this.glu['title'] = "BIL 30S";
          this.glu['parameters'].push(parameter);
          this.glu['parameters'] = [...new Set(this.glu['parameters'])];
          break;
      default:
          console.log("Something has gone wrong");
          
    }

  }

}
