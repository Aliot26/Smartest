import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  public currentForecast(lat, lng){
    return this.http.get(`http://localhost:8080/weather/${lat}/${lng}`);
  }

}
