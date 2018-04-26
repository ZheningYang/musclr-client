import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TownsGraphDetailsComponent } from './towns-graph-details.component';

describe('TownsGraphDetailsComponent', () => {
  let component: TownsGraphDetailsComponent;
  let fixture: ComponentFixture<TownsGraphDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TownsGraphDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TownsGraphDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
