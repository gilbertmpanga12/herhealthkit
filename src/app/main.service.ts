import { Injectable } from '@angular/core';
import { User } from 'firebase';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  accountSelected: string = null;
  isWelcome: boolean = true;
  hasSymptoms: boolean = false;
  urineColor: boolean = false;
  urineSmell: boolean = false;
  user:  User;
  constructor(private auth: AngularFireAuth, 
    private router: Router, private firestore: AngularFirestore,) { 
      this.auth.authState.subscribe(user => {
        if (user){
          this.user = user;
        }
      });
    }

  selectAccountType(selectedType: string): void{
    this.accountSelected = selectedType;
  }

  unselectAccountType(): void {
    this.accountSelected = null;
  }

  async login(email: string, password: string){
    let result = await this.auth.signInWithEmailAndPassword(email,password);
    this.router.navigate(['/']);
  }

  async createAccount(email: string, password: string){
    let result = await this.auth.createUserWithEmailAndPassword(email,password);
    this.router.navigate(['/']);
  }

  async createUserAccount(){
    // do work here
  }

  async createCenterAccount(){
    // do work here
  }

  async createPhyscianAccount(){
    // do work here
  }
  
}
