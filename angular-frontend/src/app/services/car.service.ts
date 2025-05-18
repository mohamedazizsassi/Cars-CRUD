import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  getCarById(id: string): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/cars/${id}`);
  }

  constructor(private httpClient: HttpClient) { }
  getListCars(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/cars`)
  }
  postCar(data: any): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/${environment.prefix}/cars`, data);
  }
  updateCar(id: number, data: any): Observable<any> {
    return this.httpClient.put<any>(`${environment.apiUrl}/${environment.prefix}/cars/${id}`, data);
  }

  deleteCar(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${environment.apiUrl}/${environment.prefix}/cars/${id}`);
  }


}
