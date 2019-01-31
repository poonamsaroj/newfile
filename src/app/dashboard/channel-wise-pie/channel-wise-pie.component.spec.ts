import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelWisePieComponent } from './channel-wise-pie.component';

describe('ChannelWisePieComponent', () => {
  let component: ChannelWisePieComponent;
  let fixture: ComponentFixture<ChannelWisePieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelWisePieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelWisePieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
