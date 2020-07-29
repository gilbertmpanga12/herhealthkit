import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private service: MainService, private router: Router) { }

  ngOnInit(): void {
  }

}
