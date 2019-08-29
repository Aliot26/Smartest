import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ApartmentComponent} from "./apartment/apartment.component";
import {HttpClientModule} from "@angular/common/http";
import {ApartmentService} from "./apartment/apartment.service";

@NgModule({
  declarations: [
    AppComponent,
    ApartmentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
