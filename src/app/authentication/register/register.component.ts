import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  accountSelected: string = null;
  accountTypes: string[] = ['User account', 'Registration Center Account', 'Physician Account'];
  constructor() { }

  ngOnInit(): void {
  }

  selectAccountType(selectedType: string): void{
    this.accountSelected = selectedType;
  }
  
  unselectAccountType(): void{
    this.accountSelected = null;
  }

}
