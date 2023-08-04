import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Url } from 'src/app/app-enum';
import { Router } from '@angular/router';
import { NEVER } from 'rxjs';
import { BouttonActionFormComponent } from '../boutton-action-form/boutton-action-form.component';

@Component({
  selector: 'app-nouveau-clt-frs',
  standalone: true,
  imports: [CommonModule, BouttonActionFormComponent],
  templateUrl: './nouveau-clt-frs.component.html',
  styleUrls: ['./nouveau-clt-frs.component.scss']
})
export class NouveauCltFrsComponent {

  @Input() origin?: string;

  constructor(private router: Router) {}

  saveClick() {

  }

  cancelClick() {
    this.origin === Url.CLIENT 
      ? this.router.navigate([Url.CLIENTS]) 
      : this.origin === Url.FOURNISSEUR ? this.router.navigate([Url.FOURNISSEURS]) : NEVER;
  }

}
