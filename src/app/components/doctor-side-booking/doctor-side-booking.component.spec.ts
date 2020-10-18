import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSideBookingComponent } from './doctor-side-booking.component';

describe('DoctorSideBookingComponent', () => {
  let component: DoctorSideBookingComponent;
  let fixture: ComponentFixture<DoctorSideBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorSideBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorSideBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
