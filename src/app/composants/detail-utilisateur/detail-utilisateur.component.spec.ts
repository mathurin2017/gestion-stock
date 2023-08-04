import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailUtilisateurComponent } from './detail-utilisateur.component';

describe('DetailUtilisateurComponent', () => {
  let component: DetailUtilisateurComponent;
  let fixture: ComponentFixture<DetailUtilisateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DetailUtilisateurComponent]
    });
    fixture = TestBed.createComponent(DetailUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
