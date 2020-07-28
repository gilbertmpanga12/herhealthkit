import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainService } from 'src/app/main.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-emailnotverified',
  templateUrl: './emailnotverified.component.html',
  styleUrls: ['./emailnotverified.component.scss']
})
export class EmailnotverifiedComponent implements OnInit {
  requestNewConfirmationLink: boolean = false;
  emailGroup: FormGroup;
  constructor(private _fb: FormBuilder, public service: MainService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.emailGroup = this._fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  openInput(): void{
    this.requestNewConfirmationLink = true;
  }

  sendConfirmationLink(): void{
    this.service.isLoading = true;
    console.log('called med')
    this.service.resendEmailActivation().then(() => {
      this.service.isLoading = false;
      this.emailGroup.reset();
      this.toastr.success('Email sent!', 'Check your email and click to activate account');
    }).catch(err => {
      this.service.isLoading = false;
      this.toastr.error('Looks like session expired logout refresh or head to sign in again & try again', '', {
        timeOut: 9000,
      });
    });
    // do something async here
  }

  cancel(): void{
    this.requestNewConfirmationLink = false;
  }

}
