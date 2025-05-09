import { Component } from '@angular/core';
import { Contacto } from '../../interfaces/contacto.interface';
import { ContactoService } from '../../services/contacto.service';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  datosContacto: Contacto = {
  nombre: '',
  email: '',
  telefono: '',
  linkedin: '',
  github: '',
  ubicacion: ''
};

  constructor(private contactoService: ContactoService) {}

  ngOnInit() {
    this.contactoService.getDatosContacto().subscribe((data: Contacto) => {
      this.datosContacto = data;
    });
  }
}
