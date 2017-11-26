import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPriceRowComponent } from './edit-price-row.component';

describe('EditPriceRowComponent', () => {
  let component: EditPriceRowComponent;
  let fixture: ComponentFixture<EditPriceRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPriceRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPriceRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
