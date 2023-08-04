import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelCmdCltFrsComponent } from './nouvel-cmd-clt-frs.component';

describe('NouvelCmdCltFrsComponent', () => {
  let component: NouvelCmdCltFrsComponent;
  let fixture: ComponentFixture<NouvelCmdCltFrsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NouvelCmdCltFrsComponent]
    });
    fixture = TestBed.createComponent(NouvelCmdCltFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
