import { Routes } from '@angular/router';
import { GestionCarComponent } from './gestion-car/gestion-car.component';
import { AjoutCarComponent } from './ajout-car/ajout-car.component';
import { ShowCarsComponent } from './show-cars/show-cars.component';
import { CarInfoComponent } from './car-info/car-info.component';

export const routes: Routes = [
    { path: 'liste', component: GestionCarComponent },
    { path: 'ajouter', component: AjoutCarComponent },
    { path: 'show-cars', component: ShowCarsComponent },
    { path: 'car-info/:id', component: CarInfoComponent },
    { path: '', component: ShowCarsComponent }, // Default route
];
