import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultFilterBoxComponent } from './result-filter-box.component';

describe('ResultFilterBoxComponent', () => {
  let component: ResultFilterBoxComponent;
  let fixture: ComponentFixture<ResultFilterBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultFilterBoxComponent]
    });
    fixture = TestBed.createComponent(ResultFilterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
