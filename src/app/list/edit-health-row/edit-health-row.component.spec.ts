import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHealthRowComponent } from './edit-health-row.component';

describe('EditHealthRowComponent', () => {
  let component: EditHealthRowComponent;
  let fixture: ComponentFixture<EditHealthRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHealthRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHealthRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
