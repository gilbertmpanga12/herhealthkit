import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ResultsComponent } from './results/results.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { UrinesmellComponent } from './urinesmell/urinesmell.component';
import { UrinecolorComponent } from './urinecolor/urinecolor.component';


const routes: Routes = [
{ path: '', component: HomeComponent, 

children: [
  {
    path: '',
    component: SymptomsComponent,
    data: {
      animations: 'CheckSymptomPage'
    }
  },
  {
    path: 'results',
    component: ResultsComponent,
    data: {
      path: 'ResultsPage'
    }
  },
  
  {
    path: 'urine-smell',
    component: UrinesmellComponent,
    data: {
      path: 'UrineSmellPage'
    }
  },
  {
    path: 'urine-color',
    component: UrinecolorComponent,
    data: {
      data: 'UrineColor'
    }
  }
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
