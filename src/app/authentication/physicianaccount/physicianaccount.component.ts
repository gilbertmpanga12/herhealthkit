import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-physicianaccount',
  templateUrl: './physicianaccount.component.html',
  styleUrls: ['./physicianaccount.component.scss']
})
export class PhysicianaccountComponent implements OnInit {
  physicialFormGroup: FormGroup;
  constructor(public service: MainService, private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.physicialFormGroup = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required],
      telephone: ['', Validators.required],
      password: ['',[Validators.required, Validators.minLength(6)]],
      destination: ['', Validators.required],
      gender: ['Female', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  createPhysicianAccount(): void {
    this.service.isLoading = true;
  }

}
