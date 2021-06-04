import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentEnterTimeComponent } from './booking-enter-time.component';

describe('AppointmentEnterTimeComponent', () => {
  let component: AppointmentEnterTimeComponent;
  let fixture: ComponentFixture<AppointmentEnterTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentEnterTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentEnterTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
