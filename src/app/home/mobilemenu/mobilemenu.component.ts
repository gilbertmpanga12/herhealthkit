import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-mobilemenu',
  templateUrl: './mobilemenu.component.html',
  styleUrls: ['./mobilemenu.component.scss']
})
export class MobilemenuComponent implements OnInit {
  links = [
    {name: 'Take a test',url: '/'},
    {name: 'Check your results', url: '/results'},
    {name: 'Log out', url: ''}
  ];
  constructor(private service: MainService) { }

  ngOnInit(): void {
  }

  logout(): void{
    this.service.logout();
  }

}
