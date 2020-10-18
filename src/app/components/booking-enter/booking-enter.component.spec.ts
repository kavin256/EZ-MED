import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingEnterComponent } from './booking-enter.component';

describe('BookingEnterComponent', () => {
  let component: BookingEnterComponent;
  let fixture: ComponentFixture<BookingEnterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingEnterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
