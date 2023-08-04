import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boutton-action-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boutton-action-form.component.html',
  styleUrls: ['./boutton-action-form.component.scss']
})
export class BouttonActionFormComponent {

  @Output() eventCancel = new EventEmitter();
  @Output() eventSave = new EventEmitter();

  cancelClick() {
    this.eventCancel.emit();
  }

  saveClick() {
    this.eventSave.emit();
  }

}
