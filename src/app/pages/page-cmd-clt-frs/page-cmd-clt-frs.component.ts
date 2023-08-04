import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from 'src/app/composants/pagination/pagination.component';
import { BouttonActionComponent } from 'src/app/composants/boutton-action/boutton-action.component';
import { DetailCmdCltFrsComponent } from 'src/app/composants/detail-cmd-clt-frs/detail-cmd-clt-frs.component';
import { DetailCmdComponent } from 'src/app/composants/detail-cmd/detail-cmd.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-cmd-clt-frs',
  standalone: true,
  imports: [CommonModule, PaginationComponent, BouttonActionComponent, DetailCmdCltFrsComponent, DetailCmdComponent],
  templateUrl: './page-cmd-clt-frs.component.html',
  styleUrls: ['./page-cmd-clt-frs.component.scss']
})
export class PageCmdCltFrsComponent {

  @Input() origin?: string;
  @Input() url?: string;

  constructor(private router: Router) {}

  nouvelCommande() {
    this.router.navigate([this.url]);
  }

}
