import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersGraphDetailsComponent } from './users-graph-details.component';

describe('UsersGraphDetailsComponent', () => {
  let component: UsersGraphDetailsComponent;
  let fixture: ComponentFixture<UsersGraphDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersGraphDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersGraphDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
