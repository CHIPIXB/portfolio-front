import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacto } from '../interfaces/contacto.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private apiUrl = environment.apiUrl;

  constructor( private http: HttpClient) {}

  getDatosContacto() {
    return this.http.get<Contacto>(`${this.apiUrl}/contacto`);
  }
}
