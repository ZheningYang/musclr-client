import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGraphDetailsComponent } from './events-graph-details.component';

describe('EventsGraphDetailsComponent', () => {
  let component: EventsGraphDetailsComponent;
  let fixture: ComponentFixture<EventsGraphDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsGraphDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsGraphDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
