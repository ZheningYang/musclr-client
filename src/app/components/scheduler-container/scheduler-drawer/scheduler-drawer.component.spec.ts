import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerDrawerComponent } from './scheduler-drawer.component';

describe('SchedulerDrawerComponent', () => {
  let component: SchedulerDrawerComponent;
  let fixture: ComponentFixture<SchedulerDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulerDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
