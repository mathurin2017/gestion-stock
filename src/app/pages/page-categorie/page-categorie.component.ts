import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from 'src/app/composants/pagination/pagination.component';
import { BouttonActionComponent } from 'src/app/composants/boutton-action/boutton-action.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-categorie',
  standalone: true,
  imports: [CommonModule, PaginationComponent, BouttonActionComponent],
  templateUrl: './page-categorie.component.html',
  styleUrls: ['./page-categorie.component.scss']
})
export class PageCategorieComponent {

  constructor(private router: Router) {}

  nouvelCategorie() {
    this.router.navigate(['categorie']);
  }

}
