import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Construction } from '../model/construction';

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {

  entityName = 'constructions';

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Construction[]> {
    return this.http.get<Construction[]>(`${environment.apiUrl}/${this.entityName}`);
  };

  get(id: number): Observable<Construction> {
    return this.http.get<Construction>(`${environment.apiUrl}/${this.entityName}/${id}`);
  };

  update(construction: Construction): Observable<Construction> {
    return this.http.patch<Construction>(`${environment.apiUrl}/${this.entityName}/${construction.id}`, construction);
  };

  create(construction: Construction): Observable<Construction> {
    return this.http.patch<Construction>(`${environment.apiUrl}/${this.entityName}`, construction);
  };

  delete(construction: Construction): Observable<Construction> {
    return this.http.delete<Construction>(`${environment.apiUrl}/${this.entityName}/${construction.id}`);
  };



}
