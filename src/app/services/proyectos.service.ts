import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../interfaces/proyecto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private apiUrl = 'http://localhost:3000/api/proyectos';

  constructor(private http: HttpClient) { }

  getProyectos() {
    return this.http.get<Proyecto[]>(this.apiUrl);
  }

}
