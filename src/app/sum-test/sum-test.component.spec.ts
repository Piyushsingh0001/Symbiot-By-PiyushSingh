import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumTestComponent } from './sum-test.component';

describe('SumTestComponent', () => {
  let component: SumTestComponent;
  let fixture: ComponentFixture<SumTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SumTestComponent]
    });
    fixture = TestBed.createComponent(SumTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
