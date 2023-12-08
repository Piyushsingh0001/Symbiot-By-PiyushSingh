import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingDataTestComponent } from './missing-data-test.component';

describe('MissingDataTestComponent', () => {
  let component: MissingDataTestComponent;
  let fixture: ComponentFixture<MissingDataTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MissingDataTestComponent]
    });
    fixture = TestBed.createComponent(MissingDataTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
