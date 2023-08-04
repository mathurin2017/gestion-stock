import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Url } from 'src/app/app-enum';
import { Router } from '@angular/router';
import { BouttonActionFormComponent } from '../boutton-action-form/boutton-action-form.component';

@Component({
  selector: 'app-nouveau-utilisateur',
  standalone: true,
  imports: [CommonModule, BouttonActionFormComponent],
  templateUrl: './nouveau-utilisateur.component.html',
  styleUrls: ['./nouveau-utilisateur.component.scss']
})
export class NouveauUtilisateurComponent {

  constructor(private router: Router) {}

  saveClick() {

  }

  cancelClick() {
    this.router.navigate([Url.UTILISATEURS]);
  }

}
