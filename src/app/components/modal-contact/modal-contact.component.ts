import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-contact.component.html',
  styleUrl: './modal-contact.component.css'
})
export class ModalContactComponent {
  @Output() closeModal : EventEmitter<boolean> = new EventEmitter()

  emitModal(){
    this.closeModal.emit(false)
  }

}
