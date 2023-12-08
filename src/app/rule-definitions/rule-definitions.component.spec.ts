import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleDefinitionsComponent } from './rule-definitions.component';

describe('RuleDefinitionsComponent', () => {
  let component: RuleDefinitionsComponent;
  let fixture: ComponentFixture<RuleDefinitionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RuleDefinitionsComponent]
    });
    fixture = TestBed.createComponent(RuleDefinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
