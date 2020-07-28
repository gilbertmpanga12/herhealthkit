import { Injectable } from '@angular/core';
import { User } from 'firebase';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  accountSelected: string = null;
  baseUrl: string = 'https://us-central1-momets-4e5e3.cloudfunctions.net/registeraccount';
  isWelcome: boolean = true;
  hasSymptoms: boolean = false;
  urineColor: boolean = false;
  urineSmell: boolean = false;
  user:  User;
  isLoading: boolean = false;
  constructor(private auth: AngularFireAuth, 
    private router: Router, private firestore: AngularFirestore, private http: HttpClient) { 
      this.auth.authState.subscribe(user => {
        if (user){
          this.user = user;
        }
      });
    }

  selectAccountType(selectedType: string): void {
    this.accountSelected = selectedType;
  }

  unselectAccountType(): void {
    this.accountSelected = null;
  }

  async login(email: string, password: string){
    let result = await this.auth.signInWithEmailAndPassword(email,password);
    this.router.navigate(['/']);
  }

  async registerAccount(email: string, password: string, accountType: string){
    let result = await this.auth.createUserWithEmailAndPassword(email,password);
    this.sendEmailVerification();
    this.http.post(this.baseUrl, {email: email,accountType: accountType});
    this.router.navigate(['/']);
  }

  async createUserAccount(payload: any){
    // creates user account
    await this.firestore.collection('userAccount').doc(this.user.uid).set(payload);
    
  }

  async createCenterAccount(payload: any){
    // creates registration center account
    await this.firestore.collection('centerAccount').doc(this.user.uid).set(payload);
  }

  async createPhyscianAccount(payload: any){
    // creates physician account
    await this.firestore.collection('physicianAccount').doc(this.user.uid).set(payload);
  }

  async forgotPassword(email: string){
    return await this.auth.sendPasswordResetEmail(email);
  }  
  
  async sendEmailVerification() {
    await (await this.auth.currentUser).sendEmailVerification();
    this.router.navigate(['/']);
  }

  

  async logout(){
    await this.auth.signOut();
    //localStorage.removeItem('user');
    this.router.navigate(['/auth']);
  }


}
