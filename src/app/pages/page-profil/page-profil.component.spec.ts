import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProfilComponent } from './page-profil.component';

describe('PageProfilComponent', () => {
  let component: PageProfilComponent;
  let fixture: ComponentFixture<PageProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PageProfilComponent]
    });
    fixture = TestBed.createComponent(PageProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
