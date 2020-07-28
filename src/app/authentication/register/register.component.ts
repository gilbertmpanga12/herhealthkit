import { Component, OnInit } from '@angular/core';
import {MainService} from '../../main.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
  
})
export class RegisterComponent implements OnInit {
  registerUserAccountGroup: FormGroup;
  accountTypes: string[] = ['User account', 'Registration Center Account', 'Physician Account'];
  constructor(public service: MainService, private _fb: FormBuilder,  
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.registerUserAccountGroup = this._fb.group({
      gender: ['Female', [Validators.required]],
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
      const email = this.registerUserAccountGroup.get('email').value,
      password = this.registerUserAccountGroup.get('password').value,
      payload = this.registerUserAccountGroup.getRawValue();
      this.service.registerAccount(email, password, 'USER').then(res => {
          this.service.createUserAccount(payload);
      }).catch(error => {
        this.service.isLoading= false;
        this.toastr.error(error,'', {
          timeOut: 3000,
          progressBar: true
        });
      });

  }

}
