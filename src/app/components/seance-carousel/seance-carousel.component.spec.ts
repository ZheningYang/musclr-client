import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceCarouselComponent } from './seance-carousel.component';

describe('SeanceCarouselComponent', () => {
  let component: SeanceCarouselComponent;
  let fixture: ComponentFixture<SeanceCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeanceCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeanceCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
