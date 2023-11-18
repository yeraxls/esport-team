import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-contact.component.html',
  styleUrl: './modal-contact.component.css'
})
export class ModalContactComponent implements OnInit {
  @Output() closeModal : EventEmitter<boolean> = new EventEmitter()
  ngOnInit(): void {
    setTimeout(() => this.emitModal(), 5000);
  }
  emitModal(){
    this.closeModal.emit(false)
  }

}
