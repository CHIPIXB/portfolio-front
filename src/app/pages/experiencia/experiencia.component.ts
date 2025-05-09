import { Component } from '@angular/core';
import { Experiencia } from '../../interfaces/experiencia.interface';
import { ExperienciaService } from '../../services/experiencia.service';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  imports: [DatePipe, RouterLink],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css'
})
export class ExperienciaComponent {

  cargando = true

  experiencia: Experiencia[] = []

  constructor(private experienciaService: ExperienciaService) {}

  ngOnInit() {
    this.experienciaService.getExperiencia().subscribe((data: Experiencia[]) => {
      this.experiencia = data;
      this.cargando = false;
    });
  }

}
