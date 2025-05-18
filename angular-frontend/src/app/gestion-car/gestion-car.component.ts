import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarService } from '../services/car.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { CarModel } from './gestion-car.modal';  // Import CarModel here



@Component({
  selector: 'app-gestion-car',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './gestion-car.component.html',
  styleUrls: ['./gestion-car.component.css']
})
export class GestionCarComponent implements OnInit {
  // Variables for cars data and pagination
  cars: CarModel[] = [];  // Use CarModel here
  filteredCarData: any[] = [];
  paginatedCars: CarModel[] = [];  // Use CarModel here
  searchTerm: string = '';

  // Pagination properties
  currentPage: number = 1;
  pageSize: number = 5;
  totalCars: number = 0;
  totalPages: number = 0;

  // Edit form
  editForm!: FormGroup;
  selectedCarId: number | null = null;
  carModelObj: CarModel = new CarModel();  // Initialize CarModel

  constructor(private carService: CarService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      nom: [''],
      marque: [''],
      caracteristique: [''],
      prix: [''],
      picture: ['']
    });
    this.loadCars();
  }

  // Load all cars from the service
  loadCars(): void {
    this.carService.getListCars().subscribe({
      next: data => {
        this.cars = data;
        this.filteredCarData = [...this.cars];
        this.updatePagination();
      },
      error: err => console.log(err)
    });
  }

  // Filter cars based on search term
  filterCars(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredCarData = this.cars.filter(car =>
      car.nom.toLowerCase().includes(term) ||
      car.marque.toLowerCase().includes(term) ||
      car.caracteristique.toLowerCase().includes(term) ||
      car.prix.toString().includes(term)
    );
    this.updatePagination();
  }

  // Update pagination values
  updatePagination(): void {
    this.totalCars = this.filteredCarData.length;
    this.totalPages = Math.ceil(this.totalCars / this.pageSize);
    this.currentPage = 1;
    this.getPaginatedCars();
  }

  // Get paginated cars for current page
  getPaginatedCars(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedCars = this.filteredCarData.slice(startIndex, endIndex);
  }

  // Go to specific page
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.getPaginatedCars();
    }
  }

  // Next page
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getPaginatedCars();
    }
  }

  // Previous page
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getPaginatedCars();
    }
  }

  // Update car data via service
  updateCar(): void {
    if (this.selectedCarId !== null) {
      const updatedData = this.editForm.value;
      this.carService.updateCar(this.selectedCarId, updatedData).subscribe({
        next: () => {
          Swal.fire('Success', 'Car updated successfully!', 'success').then(() => {
            this.loadCars();  // Reload the cars list after update
          });
        },
        error: (err) => {
          Swal.fire('Error', 'Something went wrong while updating the car.', 'error');
        }
      });
    }
  }
  // Edit the selected car's data in the form
  onEdit(car: any): void {
    // Set the selected car's ID
    this.selectedCarId = car.id;

    // Set the form values with the selected car's data
    this.editForm.setValue({
      nom: car.nom,
      marque: car.marque,
      caracteristique: car.caracteristique,
      prix: car.prix,
      picture: car.picture
    });
  }

  // Confirm and delete the car
  confirmDelete(id: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This car will be permanently deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        this.carService.deleteCar(id).subscribe(() => {
          Swal.fire('Deleted!', 'Car has been deleted.', 'success');
          this.loadCars();  // Reload cars list after deletion
        });
      }
    });
  }




}
