import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailCltFrsComponent } from 'src/app/composants/detail-clt-frs/detail-clt-frs.component';
import { PaginationComponent } from 'src/app/composants/pagination/pagination.component';
import { BouttonActionComponent } from 'src/app/composants/boutton-action/boutton-action.component';

@Component({
  selector: 'app-page-fournisseur',
  standalone: true,
  imports: [CommonModule, DetailCltFrsComponent, PaginationComponent, BouttonActionComponent],
  templateUrl: './page-fournisseur.component.html',
  styleUrls: ['./page-fournisseur.component.scss']
})
export class PageFournisseurComponent {

}
