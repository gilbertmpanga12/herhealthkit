import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  accountTypes: string[] = ['User account', 'Registration Center Account', 'Physician Account'];
  constructor() { }

  ngOnInit(): void {
  }

}
