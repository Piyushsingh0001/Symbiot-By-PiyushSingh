import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTestComponent } from './custom-test.component';

describe('CustomTestComponent', () => {
  let component: CustomTestComponent;
  let fixture: ComponentFixture<CustomTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomTestComponent]
    });
    fixture = TestBed.createComponent(CustomTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
