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


  public retrieveAllApartments() : Observable<Apartment[]>{
    return this.http.get<Apartment[]>('http://localhost:8080/apartments');
  }
}
