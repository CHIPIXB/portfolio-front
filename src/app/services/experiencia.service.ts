import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from '../interfaces/experiencia.interface';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private apiUrl = environment.apiUrl;

  constructor( private http: HttpClient) {}

  getExperiencia() {
    return this.http.get<Experiencia[]>(`${this.apiUrl}/experiencia`);
  }
}
