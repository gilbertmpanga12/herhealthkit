import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';
import { FormGroup, FormBuilder } from '@angular/forms';

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

    });
  }

  createPhysicianAccount(): void {
    this.service.isLoading = true;
  }

}
