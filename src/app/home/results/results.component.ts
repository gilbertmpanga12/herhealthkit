import { Component, OnInit } from '@angular/core';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';
import { Metrics } from 'src/app/data';

declare const document: any;

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  tables = Metrics;
  public configuration: Config;
  public columns: Columns[];

  public data = [{
    lue: '0.2',
    nit: '1++',
    uro: '78.1',
    pro: '11',
    ph: '+-',
    blo: '6_+',
    sg: '+77.6',
    ket: '2+-',
    bil: '0.1+',
    glu: '8.2'
  },
  {
    lue: '0.2',
    nit: '1++',
    uro: '78.1',
    pro: '11',
    ph: '+-',
    blo: '6_+',
    sg: '+77.6',
    ket: '2+-',
    bil: '0.1+',
    glu: '8.2'
  }
  ];

  ngOnInit(): void {
    this.configuration = { ...DefaultConfig };
    this.configuration.searchEnabled = false;
    //LUE	NIT	URO	PRO	PH	BLO	SG	KET	BIL	GLU
    this.columns = [
      { key: 'lue', title: 'LUE' },
      { key: 'nit', title: 'NIT' },
      { key: 'uro', title: 'URO' },
      { key: 'pro', title: 'PRO' },
      { key: 'ph', title: 'PH' },
      { key: 'blo', title: 'BLO' },
      { key: 'sg', title: 'SG' },
      { key: 'ket', title: 'KET' },
      { key: 'bil', title: 'BIL' },
      { key: 'glu', title: 'GLU' }
    ];
  }

  printDocument(): void{
    window.print();
  }
}
