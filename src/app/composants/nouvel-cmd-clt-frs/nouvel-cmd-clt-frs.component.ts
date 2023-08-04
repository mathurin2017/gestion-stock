import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailCmdComponent } from '../detail-cmd/detail-cmd.component';
import { Router } from '@angular/router';
import { Url } from 'src/app/app-enum';
import { NEVER } from 'rxjs';
import { BouttonActionFormComponent } from '../boutton-action-form/boutton-action-form.component';

@Component({
  selector: 'app-nouvel-cmd-clt-frs',
  standalone: true,
  imports: [CommonModule, DetailCmdComponent, BouttonActionFormComponent],
  templateUrl: './nouvel-cmd-clt-frs.component.html',
  styleUrls: ['./nouvel-cmd-clt-frs.component.scss']
})
export class NouvelCmdCltFrsComponent {

  @Input() origin?: string;

  constructor(private router: Router) {}

  saveClick() {

  }

  cancelClick() {
    this.origin === Url.CLIENT 
      ? this.router.navigate([Url.COMMANDES_CLIENTS]) 
      : this.origin === Url.FOURNISSEUR ? this.router.navigate([Url.COMMANDES_FOURNISSEURS]) : NEVER;
  }

}
