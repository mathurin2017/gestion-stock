import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailCltFrsComponent } from 'src/app/composants/detail-clt-frs/detail-clt-frs.component';
import { PaginationComponent } from 'src/app/composants/pagination/pagination.component';
import { BouttonActionComponent } from 'src/app/composants/boutton-action/boutton-action.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-client',
  standalone: true,
  imports: [CommonModule, DetailCltFrsComponent, PaginationComponent, BouttonActionComponent],
  templateUrl: './page-client.component.html',
  styleUrls: ['./page-client.component.scss']
})
export class PageClientComponent {

  constructor(private router: Router) {}

  nouvelClient() {
    this.router.navigate(['client']);
  }

}
