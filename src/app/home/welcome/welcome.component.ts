import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private service: MainService) { }

  ngOnInit(): void {
  }

  startScreening(): void{
    this.service.isWelcome = false;
  }
}
