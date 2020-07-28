import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { RegistrationcenterComponent } from './registrationcenter/registrationcenter.component';
import { PhysicianaccountComponent } from './physicianaccount/physicianaccount.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [AuthenticationComponent, RegistrationcenterComponent, 
    PhysicianaccountComponent, RegisterComponent, ForgotpasswordComponent, LayoutComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule
    
  ]
})
export class AuthenticationModule { }
