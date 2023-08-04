import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouttonActionFormComponent } from './boutton-action-form.component';

describe('BouttonActionFormComponent', () => {
  let component: BouttonActionFormComponent;
  let fixture: ComponentFixture<BouttonActionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BouttonActionFormComponent]
    });
    fixture = TestBed.createComponent(BouttonActionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
