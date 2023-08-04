import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-boutton-action',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './boutton-action.component.html',
  styleUrls: ['./boutton-action.component.scss']
})
export class BouttonActionComponent {

  @Input() showButtonNouveau: boolean = true;
  @Input() showButtonExport: boolean = true;
  @Input() showButtonImport: boolean = true;

  @Output() event = new EventEmitter();

  constructor() {}

  boutonClickNouveau() {
    this.event.emit();
  }

}
