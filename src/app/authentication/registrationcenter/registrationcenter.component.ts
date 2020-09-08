import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { nations } from 'src/app/data';

@Component({
  selector: 'app-registrationcenter',
  templateUrl: './registrationcenter.component.html',
  styleUrls: ['./registrationcenter.component.scss']
})
export class RegistrationcenterComponent implements OnInit {
  registrationCenterGroup: FormGroup;
  countries: string[] =  nations;
  constructor(public service: MainService, private _fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.registrationCenterGroup = this._fb.group({
      country: ['Uganda', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      category: ['Hospital', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  createRegistrationCenterAccount(): void{
    this.service.isLoading  = true;
      const email = this.registrationCenterGroup.get('email').value,
      password = this.registrationCenterGroup.get('password').value,
      payload = this.registrationCenterGroup.getRawValue();
      this.service.registerAccount(email, password, 'REGISTRATIONCENTER').then(res => {
          this.service.createCenterAccount(payload);
      }).catch(error => {
        this.service.isLoading= false;
        this.toastr.error(error,'', {
          timeOut: 3000,
          progressBar: true
        });
      });
  }

}
