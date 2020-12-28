import { async, TestBed } from '@angular/core/testing';
import { SearchProfessionalsComponent } from './search-professionals.component';
describe('SearchProfessionalsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchProfessionalsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SearchProfessionalsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=search-professionals.component.spec.js.map