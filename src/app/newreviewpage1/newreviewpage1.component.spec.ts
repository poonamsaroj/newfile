import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Newreviewpage1Component } from './newreviewpage1.component';

describe('Newreviewpage1Component', () => {
  let component: Newreviewpage1Component;
  let fixture: ComponentFixture<Newreviewpage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newreviewpage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newreviewpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
