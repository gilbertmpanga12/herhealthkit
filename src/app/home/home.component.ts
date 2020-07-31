import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MainService } from '../main.service';
import { trigger, transition, style, animate } from '@angular/animations';

// animations
const slideInAnimation = trigger('routeAnimations', [ 
  transition('* <=> CheckSymptomPage', [
    style({ opacity: 0 }), 
    animate(300, style({opacity: 1})),
  ]) ,
  transition('CheckSymptomPage <=> ResultsPage', [
    style({ opacity: 0 }), 
    animate(300, style({opacity: 1})),
  ]),
  transition('* <=> UrineSmellPage', [
    style({ opacity: 0 }), 
    animate(300, style({opacity: 1})),
  ]), 
  transition('* <=> UrineColor', [
    style({ opacity: 0 }), 
    animate(300, style({opacity: 1})),
  ]), // VisualKitPage,
  transition('* <=> VisualKitPage', [
    style({ opacity: 0 }), 
    animate(300, style({opacity: 1})),
  ]) ,//, 

  transition('* <=> MobilePage', [
    style({ opacity: 0 }), 
    animate(300, style({opacity: 1})),
  ]),
  transition('* <=> WelcomePage', [
    style({ opacity: 0 }), 
    animate(300, style({opacity: 1})),
  ])
]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [slideInAnimation]
})
export class HomeComponent implements OnInit {
  constructor( public service: MainService, private router: Router) { }

  ngOnInit(): void {

  }

  signOut(): void{
    this.service.logout();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  resetCount(): void{
    localStorage.removeItem('notificationCount');
    this.service.notificationCount = 0;
    this.router.navigate(['/results']);
  }
}
