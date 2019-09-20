import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Apartment} from "../apartment/apartment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApartmentDataService {

  constructor(
    private http: HttpClient
  ) {
  }


  public retrieveAllApartments(): Observable<Apartment[]> {
    return this.http.get<Apartment[]>('http://localhost:8080/apartments');
  }

  public retrieveApartment(apId) {
    return this.http.get<Apartment>(`http://localhost:8080/apartment/${apId}`);
  }

  public updateApartment(apId, apartment) {
    return this.http.put(`http://localhost:8080/apartment/${apId}`, apartment);
  }
}
