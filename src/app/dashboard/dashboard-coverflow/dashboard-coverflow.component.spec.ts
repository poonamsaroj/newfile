import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCoverflowComponent } from './dashboard-coverflow.component';

describe('DashboardCoverflowComponent', () => {
  let component: DashboardCoverflowComponent;
  let fixture: ComponentFixture<DashboardCoverflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCoverflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCoverflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
