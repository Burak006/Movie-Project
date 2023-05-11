import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesAddComponent } from './movies-add.component';

describe('MoviesAddComponent', () => {
  let component: MoviesAddComponent;
  let fixture: ComponentFixture<MoviesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
