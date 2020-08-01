import { Component, OnInit } from '@angular/core';
import {Metrics} from '../../data';
import { MainService } from 'src/app/main.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

interface Metrics{
  title: string;
  parameters: any[];
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
  uiToggle: Set<number> = new Set();
  throwError: boolean = false;
  constructor(public service: MainService, private tostr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  addItem(title: string, parameter: string){
    this.tostr.info('Checked urine color ', title + ' ' + parameter);
  }

  removeItem(title: string, parameter: string){
    this.tostr.warning('Unchecked urine color', title + ' ' + parameter, {
      timeOut: 3000,
    });
  }

  pickColor(title: string, parameter:string, _id: number, color:string, meaning: string, results: string){
    this.uiToggle.add(_id);
    this.addItem(title, parameter);
    switch(title){
      case "LEU 120S":
          this.leu['title'] = "LEU 120S";
          this.leu['parameters'].push(
            JSON.stringify({
              name: parameter,
              color: color,
              _id: _id,
              meaning: meaning,
              results:results})
          );
          this.leu['parameters'] = [...new Set(this.leu['parameters'])];
          break;
      case "NIT 60S":
          this.nit['title'] = "NIT 60S";
          this.nit['parameters'].push(JSON.stringify({
            name: parameter,
            color: color,
            _id: _id,
            meaning: meaning,
            results:results}));
          this.nit['parameters'] = [...new Set(this.nit['parameters'])];
          break;
      case "URO 60S":
          this.uro['title'] = "URO 60S";
          this.uro['parameters'].push(JSON.stringify({
            name: parameter,
            color: color,
            _id: _id,
            meaning: meaning,
            results:results}));
          this.uro['parameters'] = [...new Set(this.uro['parameters'])];
          break;
      case "PRO 60S":
          this.pro['title'] = "PRO 60S";
          this.pro['parameters'].push(JSON.stringify({
            name: parameter,
            color: color,
            _id: _id,
            meaning: meaning,
            results:results}));
          this.pro['parameters'] = [...new Set(this.pro['parameters'])];
          break;
      case "PH 60S":
          this.ph['title'] = "PH 60S";
          this.ph['parameters'].push(JSON.stringify({
            name: parameter,
            color: color,
            _id: _id,
            meaning: meaning,
            results:results}));
          this.ph['parameters'] = [...new Set(this.pro['parameters'])];
          break;
      case "BLO 60S":
          this.blo['title'] = "BLO 60S";
          this.blo['parameters'].push(JSON.stringify({
            name: parameter,
            color: color,
            _id: _id,
            meaning: meaning,
            results:results}));
          this.blo['parameters'] = [...new Set(this.blo['parameters'])];
          break;
      case "SG 45S":
          this.sg['title'] = "SG 45S";
          this.sg['parameters'].push(JSON.stringify({
            name: parameter,
            color: color,
            _id: _id,
            meaning: meaning,
            results:results}));
          this.sg['parameters'] = [...new Set(this.sg['parameters'])];
          break;
      case "KET 40S":
          this.ket['title'] = "KET 40SS";
          this.ket['parameters'].push(JSON.stringify({
            name: parameter,
            color: color,
            _id: _id,
            meaning: meaning,
            results:results}));
          this.ket['parameters'] = [...new Set(this.ket['parameters'])];
          break;
      case "BIL 30S":
          this.bil['title'] = "BIL 30S";
          this.bil['parameters'].push(JSON.stringify({
            name: parameter,
            color: color,
            _id: _id,
            meaning: meaning,
            results:results}));
          this.bil['parameters'] = [...new Set(this.bil['parameters'])];
          break;
      case "GLU 30S":
          this.glu['title'] = "BIL 30S";
          this.glu['parameters'].push(JSON.stringify({
            name: parameter,
            color: color,
            _id: _id,
            meaning: meaning,
            results:results}));
          this.glu['parameters'] = [...new Set(this.glu['parameters'])];
          break;
      default:
          console.log("Something has gone wrong");
    }
  }

  removeColor(title: string, parameter, _id: number){
    this.uiToggle.delete(_id);
    this.removeItem(title, parameter);
    switch(title){
      case "LEU 120S":
          let index = this.leu['parameters'].indexOf(parameter);
          this.leu['parameters'].splice(index,1);
          break;
      case "NIT 60S":
          let indexnit = this.nit['parameters'].indexOf(parameter);
          this.nit['parameters'].splice(indexnit,1);
          break;
      case "URO 60S":
          let indexuro = this.leu['parameters'].indexOf(parameter);
          this.uro['parameters'].splice(indexuro,1);
          break;
      case "PRO 60S":
          let indexpro = this.pro['parameters'].indexOf(parameter);
          this.pro['parameters'].splice(indexpro,1);
          break;
      case "PH 60S":
          let indexph = this.ph['parameters'].indexOf(parameter);
          this.ph['parameters'].splice(indexph,1);
          break;
      case "BLO 60S":
          let indexblo = this.ph['parameters'].indexOf(parameter);
          this.blo['parameters'].splice(indexblo,1);
          break;
      case "SG 45S":
          let indexsg = this.sg['parameters'].indexOf(parameter);
          this.sg['parameters'].splice(indexsg,1);
          break;
      case "KET 40S":
          this.ket['title'] = "KET 40SS";
          this.ket['parameters'].push(parameter);
          this.ket['parameters'] = [...new Set(this.ket['parameters'])];
          break;
      case "BIL 30S":
          let indexbil = this.bil['parameters'].indexOf(parameter);
          this.bil['parameters'].splice(indexbil,1);
          break;
      case "GLU 30S":
          let indexglu = this.glu['parameters'].indexOf(parameter);
          this.glu['parameters'].splice(indexglu,1);
          break;
      default:
          console.log("Something has gone wrong");
    }
  }

  submitColorTestResults(){
    this.service.isLoading = true;
    try{
      let regularSymptoms = localStorage.getItem('screening');
      let parsedItems = JSON.parse(regularSymptoms);
      let uniqueItems = [...new Set(parsedItems)];
      let leu = this.leu.parameters.map(val => JSON.parse(val));
      let ph = this.ph.parameters.map(val => JSON.parse(val));
      let pro = this.pro.parameters.map(val => JSON.parse(val));
      let sg = this.sg.parameters.map(val => JSON.parse(val));
      let uro = this.uro.parameters.map(val => JSON.parse(val));
      let glu = this.glu.parameters.map(val => JSON.parse(val));
      let nit = this.nit.parameters.map(val => JSON.parse(val));
      let bro = this.blo.parameters.map(val => JSON.parse(val));
      let ket = this.ket.parameters.map(val => JSON.parse(val));

      let payload = {
      uid: this.service.user.uid,
      screening: uniqueItems,
      visualtest: [
        ...leu, ...ph, ...pro , ...sg, ...uro, ...glu, ...nit, ...bro, ...ket
      ]
    }
    this.service.submitAllScreenings(payload).then(res => {
      this.service.isLoading = false;
      this.tostr.success('Great! Your screening was submitted', 'You will be notified for the results shortly');
      this.router.navigate(['/']);
     this.service.setNotificationCount();
    }).catch(err => {
      this.service.isLoading = false;
      this.tostr.error(err, 'Major Error', {
        timeOut: 3000,
      });
    });
    }catch(err){
      this.throwError = true;
      this.service.isLoading = false;
      this.tostr.error('An error occured', 
      'This happens if you have not done full screening. Please tap cancel & start a valid screening test ', {
        timeOut: 9000,
      });
    }
  }



}
