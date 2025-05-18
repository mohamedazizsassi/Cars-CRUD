import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../services/car.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-info.component.html',
  styleUrl: './car-info.component.css'
})
export class CarInfoComponent {
  car: any;

  constructor(private carService: CarService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // this is a string
    if (id) {
      this.carService.getCarById(id).subscribe(data => {
        this.car = data;
        console.log('Car fetched:', data);
      });
    }
  }
}
