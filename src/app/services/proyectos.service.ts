import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../interfaces/proyecto.interface';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProyectos() {
    return this.http.get<Proyecto[]>(`${this.apiUrl}/proyectos`);
  }

}
