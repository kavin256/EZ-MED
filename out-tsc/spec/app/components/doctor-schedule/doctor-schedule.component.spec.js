import { async, TestBed } from '@angular/core/testing';
import { DoctorScheduleComponent } from './doctor-schedule.component';
describe('DoctorScheduleComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DoctorScheduleComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DoctorScheduleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=doctor-schedule.component.spec.js.map