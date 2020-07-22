import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailnotverifiedComponent } from './emailnotverified.component';

describe('EmailnotverifiedComponent', () => {
  let component: EmailnotverifiedComponent;
  let fixture: ComponentFixture<EmailnotverifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailnotverifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailnotverifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
