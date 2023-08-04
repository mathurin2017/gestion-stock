import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PaginationComponent } from 'src/app/composants/pagination/pagination.component';
import { BouttonActionComponent } from 'src/app/composants/boutton-action/boutton-action.component';
import { DetailUtilisateurComponent } from 'src/app/composants/detail-utilisateur/detail-utilisateur.component';

@Component({
  selector: 'app-page-utilisateur',
  standalone: true,
  imports: [CommonModule, DetailUtilisateurComponent, PaginationComponent, BouttonActionComponent],
  templateUrl: './page-utilisateur.component.html',
  styleUrls: ['./page-utilisateur.component.scss']
})
export class PageUtilisateurComponent {

  constructor(private router: Router) {}

  nouveauUtilisateur() {
    this.router.navigate(['utilisateur']);
  }

}
