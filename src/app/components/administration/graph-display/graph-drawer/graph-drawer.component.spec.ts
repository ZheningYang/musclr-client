import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphDrawerComponent } from './graph-drawer.component';

describe('GraphDrawerComponent', () => {
  let component: GraphDrawerComponent;
  let fixture: ComponentFixture<GraphDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
