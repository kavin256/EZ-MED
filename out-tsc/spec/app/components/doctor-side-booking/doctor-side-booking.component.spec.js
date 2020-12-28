import { async, TestBed } from '@angular/core/testing';
import { DoctorSideBookingComponent } from './doctor-side-booking.component';
describe('DoctorSideBookingComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DoctorSideBookingComponent]
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
//# sourceMappingURL=doctor-side-booking.component.spec.js.map