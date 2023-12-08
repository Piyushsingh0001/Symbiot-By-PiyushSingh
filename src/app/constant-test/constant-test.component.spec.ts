import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstantTestComponent } from './constant-test.component';

describe('ConstantTestComponent', () => {
  let component: ConstantTestComponent;
  let fixture: ComponentFixture<ConstantTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConstantTestComponent]
    });
    fixture = TestBed.createComponent(ConstantTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
