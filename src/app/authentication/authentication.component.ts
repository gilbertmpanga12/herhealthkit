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
  isLoading: boolean = false;
  constructor(private _fb: FormBuilder, private service: MainService) { }

  ngOnInit(): void {
    this.loginGroup = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  login(): void{
      this.isLoading = true;
      let email = this.loginGroup.get('email').value,password = 
      this.loginGroup.get('password').value
      this.service.login(email, password).then((res) => {
          this.isLoading = false;
      }).catch(error => {
          this.isLoading = false;
          alert(error);
      });
  }

}
