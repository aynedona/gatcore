import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RookieProfileComponent } from './rookie-profile.component';

describe('RookieProfileComponent', () => {
  let component: RookieProfileComponent;
  let fixture: ComponentFixture<RookieProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RookieProfileComponent]
    });
    fixture = TestBed.createComponent(RookieProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
