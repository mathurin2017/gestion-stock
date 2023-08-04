import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Url } from 'src/app/app-enum';
import { Router } from '@angular/router';
import { BouttonActionFormComponent } from '../boutton-action-form/boutton-action-form.component';

@Component({
  selector: 'app-nouvel-categorie',
  standalone: true,
  imports: [CommonModule, BouttonActionFormComponent],
  templateUrl: './nouvel-categorie.component.html',
  styleUrls: ['./nouvel-categorie.component.scss']
})
export class NouvelCategorieComponent {

  constructor(private router: Router) {}

  saveClick() {

  }

  cancelClick() {
    this.router.navigate([Url.CATEGORIES]);
  }

}
