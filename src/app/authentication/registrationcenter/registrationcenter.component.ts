import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrationcenter',
  templateUrl: './registrationcenter.component.html',
  styleUrls: ['./registrationcenter.component.scss']
})
export class RegistrationcenterComponent implements OnInit {
  registrationCenterGroup: FormGroup;
  constructor(public service: MainService, private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationCenterGroup = this._fb.group({
      country: ['Uganda', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      category: ['Hospital', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  createRegistrationCenterAccount(): void{
    this.service.isLoading = true;
  }

}
