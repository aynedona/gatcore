import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageScoresComponent } from './average-scores.component';

describe('AverageScoresComponent', () => {
  let component: AverageScoresComponent;
  let fixture: ComponentFixture<AverageScoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AverageScoresComponent]
    });
    fixture = TestBed.createComponent(AverageScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
