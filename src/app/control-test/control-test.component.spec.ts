import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlTestComponent } from './control-test.component';

describe('ControlTestComponent', () => {
  let component: ControlTestComponent;
  let fixture: ComponentFixture<ControlTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlTestComponent]
    });
    fixture = TestBed.createComponent(ControlTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
