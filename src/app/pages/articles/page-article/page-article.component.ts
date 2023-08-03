import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailArticleComponent } from 'src/app/composants/detail-article/detail-article.component';
import { PaginationComponent } from 'src/app/composants/pagination/pagination.component';
import { BouttonActionComponent } from 'src/app/composants/boutton-action/boutton-action.component';

@Component({
  selector: 'app-page-article',
  standalone: true,
  imports: [CommonModule, DetailArticleComponent, PaginationComponent, BouttonActionComponent],
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.scss']
})
export class PageArticleComponent {

}
