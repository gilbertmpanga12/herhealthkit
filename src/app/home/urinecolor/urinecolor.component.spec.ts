import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrinecolorComponent } from './urinecolor.component';

describe('UrinecolorComponent', () => {
  let component: UrinecolorComponent;
  let fixture: ComponentFixture<UrinecolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrinecolorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrinecolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
