import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ApartmentComponent} from "./apartment/apartment.component";
import {HttpClientModule} from "@angular/common/http";
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from "@angular/router";
import {ApartmentDataService} from "./service/apartment-data.service";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ApartmentComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: ApartmentDataService}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
