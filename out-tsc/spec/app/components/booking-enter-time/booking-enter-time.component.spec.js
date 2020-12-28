import { async, TestBed } from '@angular/core/testing';
import { BookingEnterTimeComponent } from './booking-enter-time.component';
describe('BookingEnterTimeComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BookingEnterTimeComponent]
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
//# sourceMappingURL=booking-enter-time.component.spec.js.map