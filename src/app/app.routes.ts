import { Routes } from '@angular/router';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { HomeComponent } from './pages/home/home.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { FormacionComponent } from './pages/formacion/formacion.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomeComponent},
    {path: 'proyectos', component: ProyectosComponent},
    {path: 'experiencia', component: ExperienciaComponent},
    {path: 'formacion', component: FormacionComponent},
];
