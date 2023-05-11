import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesDetailComponent } from './movies-detail.component';

describe('MoviesDetailComponent', () => {
  let component: MoviesDetailComponent;
  let fixture: ComponentFixture<MoviesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
