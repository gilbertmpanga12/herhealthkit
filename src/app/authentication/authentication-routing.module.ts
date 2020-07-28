import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LayoutComponent } from './layout/layout.component';

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
}
]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
