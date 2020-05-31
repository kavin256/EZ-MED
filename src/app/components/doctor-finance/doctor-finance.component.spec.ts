import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorFinanceComponent } from './doctor-finance.component';

describe('DoctorFinanceComponent', () => {
  let component: DoctorFinanceComponent;
  let fixture: ComponentFixture<DoctorFinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorFinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
