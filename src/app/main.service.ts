import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  accountSelected: string = null;
  constructor() { }

  selectAccountType(selectedType: string): void{
    this.accountSelected = selectedType;
  }

  unselectAccountType(): void {
    this.accountSelected = null;
  }
}
