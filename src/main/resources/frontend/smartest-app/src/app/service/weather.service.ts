import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../app.constants";


@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  public currentForecast(lat, lng) {
    return this.http.get(`${API_URL}/weather/${lat}/${lng}`);
  }

}
