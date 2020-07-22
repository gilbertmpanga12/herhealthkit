import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckEmailConfirmationComponent } from './check-email-confirmation.component';

describe('CheckEmailConfirmationComponent', () => {
  let component: CheckEmailConfirmationComponent;
  let fixture: ComponentFixture<CheckEmailConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckEmailConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckEmailConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
