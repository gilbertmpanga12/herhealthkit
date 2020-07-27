import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainService } from 'src/app/main.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotPasswordGroup: FormGroup;
  constructor(public service: MainService, private _fb: FormBuilder,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.forgotPasswordGroup = this._fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  requestNewPassword(): void{
      this.service.isLoading = true;
      const email = this.forgotPasswordGroup.get('email').value;
      this.service.forgotPassword(email).then(res => {
        this.service.isLoading = false;
      }).catch(error => {
        this.service.isLoading = false;
        this.toastr.error(error,'', {
          timeOut: 3000,
          progressBar: true
        });
      })
  }

}
