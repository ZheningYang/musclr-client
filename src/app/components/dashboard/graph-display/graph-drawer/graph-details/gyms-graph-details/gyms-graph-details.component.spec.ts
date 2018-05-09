import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymsGraphDetailsComponent } from './gyms-graph-details.component';

describe('GymsGraphDetailsComponent', () => {
  let component: GymsGraphDetailsComponent;
  let fixture: ComponentFixture<GymsGraphDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymsGraphDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymsGraphDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
