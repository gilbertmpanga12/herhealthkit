import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationcenterComponent } from './registrationcenter.component';

describe('RegistrationcenterComponent', () => {
  let component: RegistrationcenterComponent;
  let fixture: ComponentFixture<RegistrationcenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationcenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
