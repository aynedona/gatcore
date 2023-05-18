import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubScoreComponent } from './hub-score.component';

describe('HubScoreComponent', () => {
  let component: HubScoreComponent;
  let fixture: ComponentFixture<HubScoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HubScoreComponent]
    });
    fixture = TestBed.createComponent(HubScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
