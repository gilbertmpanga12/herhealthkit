import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  accountSelected: string = null;
  isWelcome: boolean = true;
  hasSymptoms: boolean = false;
  urineColor: boolean = false;
  urineSmell: boolean = false;

  constructor() { }

  selectAccountType(selectedType: string): void{
    this.accountSelected = selectedType;
  }

  unselectAccountType(): void {
    this.accountSelected = null;
  }

  
}
