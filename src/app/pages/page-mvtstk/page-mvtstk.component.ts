import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailMvtStkArticleComponent } from 'src/app/composants/detail-mvt-stk-article/detail-mvt-stk-article.component';
import { PaginationComponent } from 'src/app/composants/pagination/pagination.component';
import { BouttonActionComponent } from 'src/app/composants/boutton-action/boutton-action.component';
import { DetailMvtStkComponent } from 'src/app/composants/detail-mvt-stk/detail-mvt-stk.component';

@Component({
  selector: 'app-page-mvtstk',
  standalone: true,
  imports: [CommonModule, DetailMvtStkArticleComponent, DetailMvtStkComponent, PaginationComponent, BouttonActionComponent],
  templateUrl: './page-mvtstk.component.html',
  styleUrls: ['./page-mvtstk.component.scss']
})
export class PageMvtstkComponent {

}
