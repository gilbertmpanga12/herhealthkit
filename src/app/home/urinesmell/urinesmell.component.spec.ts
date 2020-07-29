import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrinesmellComponent } from './urinesmell.component';

describe('UrinesmellComponent', () => {
  let component: UrinesmellComponent;
  let fixture: ComponentFixture<UrinesmellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrinesmellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrinesmellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
