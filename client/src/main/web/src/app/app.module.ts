import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {AppComponent} from './app.component';
import {ApartmentComponent} from "./apartment/apartment.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import {ApartmentDetailsComponent} from './apartment-details/apartment-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserComponent} from './user/user.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {LocalForecastComponent} from './local-forecast/local-forecast.component';
import {WeatherService} from "./service/weather.service";
import {LoginComponent} from './login/login.component';
import {HttpInterceptorAuthService} from "./service/http-interceptor-auth.service";

@NgModule({
  declarations: [
    AppComponent,
    ApartmentComponent,
    NavbarComponent,
    FooterComponent,
    ApartmentDetailsComponent,
    UserComponent,
    UserDetailsComponent,
    LocalForecastComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [WeatherService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorAuthService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
