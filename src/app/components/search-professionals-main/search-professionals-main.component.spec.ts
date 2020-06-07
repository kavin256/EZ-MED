import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProfessionalsMainComponent } from './search-professionals-main.component';

describe('SearchProfessionalsMainComponent', () => {
  let component: SearchProfessionalsMainComponent;
  let fixture: ComponentFixture<SearchProfessionalsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProfessionalsMainComponent ]
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
