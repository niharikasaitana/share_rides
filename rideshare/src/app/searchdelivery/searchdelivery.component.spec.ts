import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdeliveryComponent } from './searchdelivery.component';

describe('SearchdeliveryComponent', () => {
  let component: SearchdeliveryComponent;
  let fixture: ComponentFixture<SearchdeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchdeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
