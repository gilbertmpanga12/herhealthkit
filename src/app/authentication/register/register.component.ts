import { Component, OnInit } from '@angular/core';
import {MainService} from '../../main.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerUserAccountGroup: FormGroup;
  accountTypes: string[] = ['User account', 'Registration Center Account', 'Physician Account'];
  constructor(public service: MainService, private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerUserAccountGroup = this._fb.group({
      gender: ['', [Validators.required]],
      firstName: ['',  [Validators.required]],
      lastName: ['',[Validators.required]],
      district: ['', [Validators.required]],
      city: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      telephone: ['', [Validators.required]]
    });
  }

  registerUserAccount(): void{
      this.service.isLoading  = true;

  }

}
