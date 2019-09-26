import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Apartment} from "../apartment/apartment";
import {Observable} from "rxjs";
import {API_URL} from "../app.constants";

@Injectable({
  providedIn: 'root'
})
export class ApartmentDataService {

  constructor(
    private http: HttpClient
  ) {
  }


  public retrieveAllApartments(): Observable<Apartment[]> {
    return this.http.get<Apartment[]>(`${API_URL}/apartments`);
  }

  public retrieveApartment(apId) {
    return this.http.get<Apartment>(`${API_URL}/apartment/${apId}`);
  }

  public updateApartment(apId, apartment) {
    return this.http.put(`${API_URL}/apartment/${apId}`, apartment);
  }
}
