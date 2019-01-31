import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedVsrejectedBarComponent } from './accepted-vsrejected-bar.component';

describe('AcceptedVsrejectedBarComponent', () => {
  let component: AcceptedVsrejectedBarComponent;
  let fixture: ComponentFixture<AcceptedVsrejectedBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedVsrejectedBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedVsrejectedBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
