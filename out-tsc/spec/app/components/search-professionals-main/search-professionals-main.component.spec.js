import { async, TestBed } from '@angular/core/testing';
import { SearchProfessionalsMainComponent } from './search-professionals-main.component';
describe('SearchProfessionalsMainComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchProfessionalsMainComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SearchProfessionalsMainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=search-professionals-main.component.spec.js.map