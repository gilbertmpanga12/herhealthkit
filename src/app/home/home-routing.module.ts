import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ResultsComponent } from './results/results.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { UrinesmellComponent } from './urinesmell/urinesmell.component';
import { UrinecolorComponent } from './urinecolor/urinecolor.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';


const routes: Routes = [
{ path: '', component: HomeComponent, 

children: [
  {
    path: '',
    component: WelcomeComponent,
    data: {
      animation: 'WelcomePage'
    }
  },
  {
    path: 'check-symptoms',
    component: SymptomsComponent,
    data: {
      animation: 'CheckSymptomPage'
    }
  },
  {
    path: 'results',
    component: ResultsComponent,
    data: {
      animation: 'ResultsPage'
    }
  },
  
  {
    path: 'urine-smell',
    component: UrinesmellComponent,
    data: {
      animation: 'UrineSmellPage'
    }
  },
  {
    path: 'urine-color',
    component: UrinecolorComponent,
    data: {
      animation: 'UrineColor'
    }
  },
  {
    path: 'visual-test-kit',
    component: ColorPickerComponent,
    data: {
      animation: 'VisualKitPage'
    }
  }
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
