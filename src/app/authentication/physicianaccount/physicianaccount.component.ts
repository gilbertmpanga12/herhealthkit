import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { nations } from 'src/app/data';

@Component({
  selector: 'app-physicianaccount',
  templateUrl: './physicianaccount.component.html',
  styleUrls: ['./physicianaccount.component.scss']
})
export class PhysicianaccountComponent implements OnInit {
  physicialFormGroup: FormGroup;
  countries: string[] = nations;
  constructor(public service: MainService, private _fb: FormBuilder, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.physicialFormGroup = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required],
      telephone: ['', Validators.required],
      password: ['',[Validators.required, Validators.minLength(6)]],
      destination: ['Doctor', Validators.required],
      gender: ['Female', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['United States', [Validators.required]]
    });
  }

  createPhysicianAccount(): void {
    this.service.isLoading  = true;
      const email = this.physicialFormGroup.get('email').value,
      password = this.physicialFormGroup.get('password').value,
      payload = this.physicialFormGroup.getRawValue();
      this.service.registerAccount(email, password, 'PHYSICIANACCOUNT').then(res => {
          this.service.createPhyscianAccount(payload);
      }).catch(error => {
        this.service.isLoading= false;
        this.toastr.error(error,'', {
          timeOut: 3000,
          progressBar: true
        });
      });
  }

}
