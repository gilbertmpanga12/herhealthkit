import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianaccountComponent } from './physicianaccount.component';

describe('PhysicianaccountComponent', () => {
  let component: PhysicianaccountComponent;
  let fixture: ComponentFixture<PhysicianaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicianaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
