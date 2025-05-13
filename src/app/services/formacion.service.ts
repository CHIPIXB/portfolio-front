import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formacion } from '../interfaces/formacion.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getFormacion() {
    return this.http.get<Formacion[]>(`${this.apiUrl}/formacion`);
  }
}
