import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingEnterTimeComponent } from './booking-enter-time.component';

describe('BookingEnterTimeComponent', () => {
  let component: BookingEnterTimeComponent;
  let fixture: ComponentFixture<BookingEnterTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingEnterTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingEnterTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
