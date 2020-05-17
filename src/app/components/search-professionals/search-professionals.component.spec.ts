import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProfessionalsComponent } from './search-professionals.component';

describe('SearchProfessionalsComponent', () => {
  let component: SearchProfessionalsComponent;
  let fixture: ComponentFixture<SearchProfessionalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProfessionalsComponent ]
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
