import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacto } from '../interfaces/contacto.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private url = 'http://localhost:3000/api/contacto';

  constructor( private http: HttpClient) {}

  getDatosContacto() {
    return this.http.get<Contacto>(this.url);
  }
}
