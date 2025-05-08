import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from '../interfaces/experiencia.interface';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private url = 'http://localhost:3000/api/experiencia';

  constructor( private http: HttpClient) {}

  getExperiencia() {
    return this.http.get<Experiencia[]>(this.url);
  }
}
