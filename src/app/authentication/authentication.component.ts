import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  loginGroup: FormGroup;
  defaultFormClass: string = `
  appearance-none 
  rounded-none relative block w-full px-3 py-2
  border border-gray-300 placeholder-gray-500 text-gray-900 
  rounded-t-md focus:outline-none focus:shadow-outline-blue 
  focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5
  `;
  errorClass: string = `
  appearance-none 
  rounded-none relative block w-full px-3 py-2
  border border-red-300 placeholder-red-500 text-red-900 
  rounded-t-md focus:outline-none focus:shadow-outline-red 
  focus:border-red-300 focus:z-10 sm:text-sm sm:leading-5
  `;
  constructor(private _fb: FormBuilder, public service: MainService) { }

  ngOnInit(): void {
    this.loginGroup = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  login(): void{
      this.service.isLoading = true;
      let email = this.loginGroup.get('email').value,password = 
      this.loginGroup.get('password').value
      this.service.login(email, password).then((res) => {
        this.service.isLoading = false;
      }).catch(error => {
        this.service.isLoading= false;
          alert(error);
      });
  }

}
