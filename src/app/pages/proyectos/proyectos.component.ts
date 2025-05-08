import { Component } from '@angular/core';
import { Proyecto } from '../../interfaces/proyecto.interface';
import { ProyectosService } from '../../services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  imports: [],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

  proyectos: Proyecto[] = []

  constructor(private proyectosService: ProyectosService) {}

  ngOnInit() {
    this.proyectosService.getProyectos().subscribe((data: Proyecto[]) => {
      this.proyectos = data;
    });
  }
  
}
