import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Apartment} from "./apartment";

@Injectable()
export class ApartmentService {
  private baseUrl: string;

  constructor (private http: HttpClient){
    this.baseUrl = 'http://localhost:8080/apartments';
  }

  public getApartmentsList(): Observable<Apartment[]>{
    return this.http.get<Apartment[]>(this.baseUrl);
  }

}
