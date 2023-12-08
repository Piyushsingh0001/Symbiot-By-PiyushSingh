import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpikeTestComponent } from './spike-test.component';

describe('SpikeTestComponent', () => {
  let component: SpikeTestComponent;
  let fixture: ComponentFixture<SpikeTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpikeTestComponent]
    });
    fixture = TestBed.createComponent(SpikeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
