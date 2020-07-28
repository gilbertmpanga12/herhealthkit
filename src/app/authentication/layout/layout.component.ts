import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

// animations
const slideInAnimation = trigger('routeAnimations', [ 
  transition('AuthPage <=> RegisterPage', [
    style({ opacity: 0 }), 
    animate(900, style({opacity: 1})),
  ]) ,
  transition('* <=> CreateUserPage', [
    style({ opacity: 0 }), 
    animate(800, style({opacity: 1})),
  ]),
  transition('* <=> PhysicianAccountPage', [
    style({ opacity: 0 }), 
    animate(800, style({opacity: 1})),
  ]), 
  transition('* <=> RegistrationCenterAccountPage', [
    style({ opacity: 0 }), 
    animate(800, style({opacity: 1})),
  ]),
  transition('* <=> ForgotPasswordPage', [
    style({ opacity: 0 }), 
    animate(800, style({opacity: 1})),
  ]),
  
]);


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [slideInAnimation]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
