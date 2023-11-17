import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalContactComponent } from '../modal-contact/modal-contact.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ModalContactComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  _mostrarModal: boolean = false
  get mostrarModal(){
    return this._mostrarModal
  }
  set mostrarModal(v : any){
    this._mostrarModal = v
  }
  enviarCorreo(){
    this.mostrarModal = true
  }

  closeModal(e : any) {
    this.mostrarModal = e;
  }

}
