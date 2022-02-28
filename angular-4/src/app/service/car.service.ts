import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  entityName = 'cars';

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(`${environment.apiUrl}/${this.entityName}`);
  };

  get(id: number): Observable<Car> {
    return this.http.get<Car>(`${environment.apiUrl}/${this.entityName}/${id}`);
  };

  update(car: Car): Observable<Car> {
    return this.http.patch<Car>(`${environment.apiUrl}/${this.entityName}/${car.id}`, car);
  };

  create(car: Car): Observable<Car> {
    return this.http.patch<Car>(`${environment.apiUrl}/${this.entityName}`, car);
  };

  delete(car: Car): Observable<Car> {
    return this.http.delete<Car>(`${environment.apiUrl}/${this.entityName}/${car.id}`);
  };

}
