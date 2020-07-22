import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { RegistrationcenterComponent } from './registrationcenter/registrationcenter.component';
import { PhysicianaccountComponent } from './physicianaccount/physicianaccount.component';


@NgModule({
  declarations: [AuthenticationComponent, RegistrationcenterComponent, PhysicianaccountComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
