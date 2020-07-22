import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ResultsComponent } from './results/results.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { CheckEmailConfirmationComponent } from './check-email-confirmation/check-email-confirmation.component';
import { EmailnotverifiedComponent } from './emailnotverified/emailnotverified.component';


@NgModule({
  declarations: [HomeComponent, ResultsComponent, ColorPickerComponent, CheckEmailConfirmationComponent, EmailnotverifiedComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
