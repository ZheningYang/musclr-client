import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCarouselComponent } from './user-carousel.component';

describe('UserCarouselComponent', () => {
  let component: UserCarouselComponent;
  let fixture: ComponentFixture<UserCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
