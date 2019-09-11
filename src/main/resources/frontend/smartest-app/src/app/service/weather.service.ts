import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable()
export class WeatherService {

  readonly ROOT_URL = 'https://api.darksky.net/forecast/378ebeadf4988811d6093c69811e3beb';

  constructor(private http: HttpClient) { }


  currentForecast(lat: number, lng: number): Observable<any> {
    let params = new HttpParams();
    params = params.set('lat', lat.toString() );
    params = params.set('lng', lng.toString() );

    return this.http.get(this.ROOT_URL, { params })
  }

}
