import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {WeatherService} from "../service/weather.service";
import {tap} from "rxjs/operators";


@Component({
  selector: 'local-forecast',
  templateUrl: './local-forecast.component.html',
  styleUrls: ['./local-forecast.component.css']
})
export class LocalForecastComponent implements OnInit {

  lat: number;
  lng: number;
  forecast: Observable<any>;

  constructor(private weather: WeatherService) {
  }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.getForecast();
      });
    } else {
      /// default coords
      this.lat = 40.73;
      this.lng = -73.93;
      this.getForecast();
    }

  }

  getForecast() {
    this.forecast = this.weather.currentForecast(this.lat, this.lng)
      .pipe(tap(data => console.log(data)))
  }


  /// Helper to make weather icons work
  /// better solution is to map icons to an object
  weatherIcon(icon) {
    switch (icon) {
      case 'partly-cloudy-day':
        return 'wi wi-day-cloudy';
      case 'clear-day':
        return 'wi wi-day-sunny';
      case 'partly-cloudy-night':
        return 'wi wi-night-partly-cloudy';
      case 'rain':
        return 'wi wi-day-rain';
      case 'snow':
        return 'wi wi-day-snow';
      default:
        return `wi wi-solar-eclipse`
    }
  }

}
