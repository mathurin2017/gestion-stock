import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BouttonActionFormComponent } from 'src/app/composants/boutton-action-form/boutton-action-form.component';

@Component({
  selector: 'app-page-profil',
  standalone: true,
  imports: [CommonModule, RouterLink, BouttonActionFormComponent],
  templateUrl: './page-profil.component.html',
  styleUrls: ['./page-profil.component.scss']
})
export class PageProfilComponent {

  showChangePassword!: boolean;

  constructor() {}

  saveClick() {

  }

}
