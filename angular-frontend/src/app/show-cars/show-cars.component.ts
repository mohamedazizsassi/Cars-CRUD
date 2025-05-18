import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-show-cars',
  standalone: true,
  imports: [CommonModule, RouterLink],  // Add this line
  templateUrl: './show-cars.component.html',
  styleUrls: ['./show-cars.component.css']
})
export class ShowCarsComponent implements OnInit {
  cars: any[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    // Fetch the 8 last added cars from the backend
    this.carService.getListCars().subscribe((data: any[]) => {
      // Limit the result to the 8 latest cars
      this.cars = data.slice(0, 8);
    });
  }
}
