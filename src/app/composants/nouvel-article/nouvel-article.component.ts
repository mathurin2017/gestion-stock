import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Url } from 'src/app/app-enum';
import { BouttonActionFormComponent } from '../boutton-action-form/boutton-action-form.component';

@Component({
  selector: 'app-nouvel-article',
  standalone: true,
  imports: [CommonModule, BouttonActionFormComponent],
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.scss']
})
export class NouvelArticleComponent {

  constructor(private router: Router) {}

  saveClick() {

  }

  cancelClick() {
    this.router.navigate([Url.ARTICLES]);
  }

}
