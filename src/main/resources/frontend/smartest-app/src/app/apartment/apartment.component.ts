import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Apartment} from "./apartment";
import {ApartmentService} from "./apartment.service";

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {
  apartments: Apartment[];

  constructor(private apartmentService: ApartmentService) {}

  ngOnInit() {
    this.apartmentService.getApartmentsList().subscribe(data => {
      this.apartments = data;
    });
  }


}
