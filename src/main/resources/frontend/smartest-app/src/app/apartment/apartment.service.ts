import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  constructor (private http: HttpClient){}

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/apartments';

  getApartmentsList(): Observable<any>{
    return this.http.get('${this.baseUrl}');
  }

}
