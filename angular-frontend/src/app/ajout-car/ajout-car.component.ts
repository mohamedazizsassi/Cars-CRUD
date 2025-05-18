import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from '../services/car.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ajout-car',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './ajout-car.component.html',
  styleUrl: './ajout-car.component.css'
})
export class AjoutCarComponent {
  formCar!: FormGroup;
  submitted = false;
  listCars: any[] = [];

  constructor(private carService: CarService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formCar = this.fb.group({
      nom: ['', Validators.required],
      marque: ['', Validators.required],
      caracteristique: ['', Validators.required],
      prix: [null, [Validators.required, Validators.min(0)]],
      picture: ['', Validators.required]
    });
  }

  submit(): void {
    if (this.formCar.invalid) {
      this.submitted = true;
      return;
    }

    this.carService.postCar(this.formCar.value).subscribe(
      () => {
        this.router.navigate(['liste']);
        console.log(this.formCar.value);
      },
      err => {
        console.error(err);
      }
    );
  }
}
