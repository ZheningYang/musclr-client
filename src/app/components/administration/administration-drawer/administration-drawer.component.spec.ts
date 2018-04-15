import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationDrawerComponent } from './administration-drawer.component';

describe('AdministrationDrawerComponent', () => {
  let component: AdministrationDrawerComponent;
  let fixture: ComponentFixture<AdministrationDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
