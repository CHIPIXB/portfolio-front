import { Component } from '@angular/core';
import { Formacion } from '../../interfaces/formacion.interface';
import { FormacionService } from '../../services/formacion.service';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-formacion',
  imports: [RouterLink, DatePipe],
  templateUrl: './formacion.component.html',
  styleUrl: './formacion.component.css'
})
export class FormacionComponent {

  cargando = true

  formaciones: Formacion[] = [];

  constructor(private formacionService: FormacionService) {}

  ngOnInit() {
    this.formacionService.getFormacion().subscribe((data: Formacion[]) => {
      this.formaciones = data;
      this.cargando = false;
    });
  }

}
