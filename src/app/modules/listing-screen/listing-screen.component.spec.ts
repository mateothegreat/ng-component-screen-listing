import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingScreenComponent } from './listing-screen.component';

describe('ListingScreenComponent', () => {
  let component: ListingScreenComponent;
  let fixture: ComponentFixture<ListingScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
