import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ResultsComponent } from './results/results.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { EmailnotverifiedComponent } from './emailnotverified/emailnotverified.component';
import { TaketestComponent } from './taketest/taketest.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, ResultsComponent, ColorPickerComponent, EmailnotverifiedComponent, TaketestComponent, WelcomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
