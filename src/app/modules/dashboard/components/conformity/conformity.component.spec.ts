import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformityComponent } from './conformity.component';

describe('ConformityComponent', () => {
  let component: ConformityComponent;
  let fixture: ComponentFixture<ConformityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConformityComponent]
    });
    fixture = TestBed.createComponent(ConformityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
