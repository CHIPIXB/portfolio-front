import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formacion } from '../interfaces/formacion.interface';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {

  private url = 'http://localhost:3000/api/formacion';

  constructor(private http: HttpClient) {}

  getFormacion() {
    return this.http.get<Formacion[]>(this.url);
  }
}
