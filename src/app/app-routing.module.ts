import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [{ path: '', 
loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
canActivateChild: [AuthGuard]

},
 { path: 'auth', 
 loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
 data: {
  animation: 'FilterPage'
}
},
{
  path: '**',
  component: PagenotfoundComponent,
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
