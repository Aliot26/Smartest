import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Apartment} from "../apartment/apartment";

@Injectable({
  providedIn: 'root'
})
export class ApartmentDataService {

  constructor(private http: HttpClient) {
  }

  retrieveAllApartments() {
    return this.http.get<Apartment[]>(`/apartments`);
  }
}
