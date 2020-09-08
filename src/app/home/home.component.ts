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
  defaultStyle: string = `
  cursor-pointer ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white 
  focus:outline-none focus:text-white  transition duration-150 ease-in-out
  `;
  focusedStyle: string = `
  cursor-pointer ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-white hover:text-white  
  focus:outline-none focus:text-white  transition duration-150 ease-in-out bg-pink-400
              `;

  constructor( public service: MainService, private router: Router) {

   }

    checkUrl(url: string){
     return this.router.url == url;
   }
  ngOnInit(): void {
  
  }

  signOut(): void{
    this.service.logout();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  resetCount(): void{
    this.service.removeNotificationCount();
    this.router.navigate(['/results']);
  }
}
