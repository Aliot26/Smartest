import {Component, OnInit} from "@angular/core";
import {Apartment} from "./apartment";
import {ApartmentDataService} from "../service/apartment-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {
  apartments: Apartment[];

  constructor(private apartmentDataService: ApartmentDataService,
              private router: Router) {
  }

  ngOnInit() {
    this.apartmentDataService.retrieveAllApartments().subscribe(data => {
      this.apartments = data;
    });
  }
}
