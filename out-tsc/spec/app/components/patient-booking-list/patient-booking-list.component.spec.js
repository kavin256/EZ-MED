import { async, TestBed } from '@angular/core/testing';
import { PatientBookingListComponent } from './patient-booking-list.component';
describe('PatientBookingListComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PatientBookingListComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PatientBookingListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=patient-booking-list.component.spec.js.map