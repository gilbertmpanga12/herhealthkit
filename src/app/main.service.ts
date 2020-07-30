import { Injectable } from '@angular/core';
import { User } from 'firebase';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  accountSelected: string = null;
  baseUrl: string = 'https://us-central1-momets-4e5e3.cloudfunctions.net/registeraccount';
  isWelcome: boolean = true;
  userVerified: boolean = false;
  user:  User;
  isLoading: boolean = false;
  symptomStore: Set<string> = new Set();
  defaultBorderStyle: string = `
  border border-gray-400 rounded-lg w-full p-6 text-left bg-white 
  shadow-md mb-5 inline-flex items-stretch
  `;
  selectedBorderStyle: string = `
  border-4 border-indigo-700 rounded-lg w-full p-6 text-left bg-white 
  shadow-md mb-5 inline-flex items-stretch
  `;
  colorCodes: any = {};
  
  constructor(private auth: AngularFireAuth, 
    private router: Router, private firestore: AngularFirestore,
     private http: HttpClient, private tostr: ToastrService) { 
      this.auth.authState.subscribe(user => {
        if (user){
          this.user = user;
          this.userVerified = user.emailVerified;
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
    const user = await this.auth.currentUser;
    await this.firestore.collection('userAccount').doc(user.uid).set(payload);
    
  }

  async createCenterAccount(payload: any){
    // creates registration center account
    let user = await this.auth.currentUser;
    await this.firestore.collection('centerAccount').doc(user.uid).set(payload);
  }

  async createPhyscianAccount(payload: any){
    // creates physician account
    let user = await this.auth.currentUser;
    await this.firestore.collection('physicianAccount').doc(user.uid).set(payload);
  }

  async forgotPassword(email: string){
    return await this.auth.sendPasswordResetEmail(email);
  }  
  
  async sendEmailVerification() {
    await (await this.auth.currentUser).sendEmailVerification();
    this.router.navigate(['/']);
  }

  async resendEmailActivation(){
    await (await this.auth.currentUser).sendEmailVerification();
  }

  

  async logout(){
    await this.auth.signOut();
    //localStorage.removeItem('user');
    this.router.navigate(['/auth']);
  }

  pushItem(item: string): void{
    this.symptomStore.add(item);
  }

  removeSymptom(item: string){
    this.symptomStore.delete(item);
  }

  async submitScreening(){
    let user = await this.auth.currentUser;
    this.isLoading = true;
    if(this.symptomStore.has('Back pain') && 
    this.symptomStore.has('Lower abdomen pain') && 
    this.symptomStore.has('Lower abdomen pain') && 
    this.symptomStore.has('Pelvic pain') && 
    this.symptomStore.has('Burning sensation during urination')){
      this.isLoading = true;
      let symptoms = [];
      this.symptomStore.forEach(val => symptoms.push(val));
      localStorage.setItem('screening',JSON.stringify(symptoms));
      this.firestore.collection('screenings').doc(user.uid).set({screening: symptoms}).then((res) => {
        this.isLoading = false;
        this.router.navigate(['/visual-test-kit']);
     }).catch(err => {
      this.tostr.error(err, 'Major Error', {
        timeOut: 3000,
      });
     });
    
      
    }else {
      let symptoms = [];
      this.symptomStore.forEach(val => symptoms.push(val));
       this.firestore.collection('screenings').doc(user.uid).set({screening: symptoms}).then(res => {
        this.isLoading = false;
        this.tostr.success('Great! Your screening was submitted', 'You will be notified for the results shortly');
       }).catch(err => {
        this.tostr.error(err, 'Major Error', {
          timeOut: 3000,
        });
       });
       
    }
  }


async submitAllScreenings(payload){
   let user = await this.auth.currentUser;
  this.firestore.collection('screenings').doc(user.uid).set(payload).then((res) => {
    this.isLoading = false;
    this.router.navigate(['/visual-test-kit']);
 }).catch(err => {
  this.tostr.error(err, 'Major Error', {
    timeOut: 3000,
  });
 });
 }

 

}
