import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEditPriceComponent } from './list-edit-price.component';

describe('ListEditPriceComponent', () => {
  let component: ListEditPriceComponent;
  let fixture: ComponentFixture<ListEditPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEditPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEditPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
