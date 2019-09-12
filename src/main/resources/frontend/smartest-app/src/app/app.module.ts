import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ApartmentComponent} from "./apartment/apartment.component";
import {HttpClientModule} from "@angular/common/http";
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import {ApartmentDetailsComponent} from './apartment-details/apartment-details.component';
import {FormsModule} from "@angular/forms";
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LocalForecastComponent } from './local-forecast/local-forecast.component';
import {WeatherService} from "./service/weather.service";

@NgModule({
  declarations: [
    AppComponent,
    ApartmentComponent,
    NavbarComponent,
    FooterComponent,
    ApartmentDetailsComponent,
    UserComponent,
    UserDetailsComponent,
    LocalForecastComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
