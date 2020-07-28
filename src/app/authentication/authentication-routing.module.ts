import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LayoutComponent } from './layout/layout.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { PhysicianaccountComponent } from './physicianaccount/physicianaccount.component';
import { RegistrationcenterComponent } from './registrationcenter/registrationcenter.component';

const routes: Routes = [{ path: '', component: LayoutComponent ,children: [
  { path: '', component: AuthenticationComponent, data: {
    animation: 'AuthPage'
  }},
  {path: 'register', component: RegisterComponent,  data: {
    animation: 'RegisterPage'
  }},
  {path: 'forgot-password', component: ForgotpasswordComponent,
data: {
  animation: 'ForgotPasswordPage'
}
},
{
  path: 'create-user-account',
  component: UseraccountComponent,
  data: {
    animation: 'CreateUserPage'
  }
},
{
  path: 'register-physician-account',
  component: PhysicianaccountComponent,
  data: {
    animation: 'PhysicianAccountPage'
  }
},
{
  path: 'create-registration-center-account',
  component: RegistrationcenterComponent,
  data: {
    animation: 'RegistrationCenterAccountPage'
  }
}
]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
