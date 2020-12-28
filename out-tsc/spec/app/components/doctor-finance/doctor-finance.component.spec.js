import { async, TestBed } from '@angular/core/testing';
import { DoctorFinanceComponent } from './doctor-finance.component';
describe('DoctorFinanceComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DoctorFinanceComponent]
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
//# sourceMappingURL=doctor-finance.component.spec.js.map