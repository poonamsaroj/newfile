import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviewbuttonComponent } from './add-reviewbutton.component';

describe('AddReviewbuttonComponent', () => {
  let component: AddReviewbuttonComponent;
  let fixture: ComponentFixture<AddReviewbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReviewbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
