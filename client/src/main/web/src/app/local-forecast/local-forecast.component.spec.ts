import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LocalForecastComponent} from './local-forecast.component';
import {HttpClientModule} from "@angular/common/http";
import {WeatherService} from "../service/weather.service";
import {RouterModule} from "@angular/router";

describe('LocalForecastComponent', () => {
  let component: LocalForecastComponent;
  let fixture: ComponentFixture<LocalForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [WeatherService],
      declarations: [LocalForecastComponent,RouterModule.forRoot([])]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
