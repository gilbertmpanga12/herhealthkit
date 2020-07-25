import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ResultsComponent } from './results/results.component';
import { TaketestComponent } from './taketest/taketest.component';


const routes: Routes = [
{ path: '', component: HomeComponent, 

children: [
  {
    path: '',
    component: TaketestComponent
  },
  {
    path: 'results',
    component: ResultsComponent
  }
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
