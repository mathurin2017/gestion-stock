import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelCategorieComponent } from './nouvel-categorie.component';

describe('NouvelCategorieComponent', () => {
  let component: NouvelCategorieComponent;
  let fixture: ComponentFixture<NouvelCategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NouvelCategorieComponent]
    });
    fixture = TestBed.createComponent(NouvelCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
