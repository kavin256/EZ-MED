import { async, TestBed } from '@angular/core/testing';
import { DoctorSideBookingListComponent } from './doctor-side-booking-list.component';
describe('DoctorSideBookingListComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DoctorSideBookingListComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DoctorSideBookingListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=doctor-side-booking-list.component.spec.js.map