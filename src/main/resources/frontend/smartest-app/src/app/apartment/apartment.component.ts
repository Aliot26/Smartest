import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Apartment} from "./apartment";
import {Router} from "@angular/router";
import {ApartmentService} from "./apartment.service";

@Component({
  selector: "app-apartment",
  templateUrl: "./apartment.component.html",
  styleUrls: ["./apartment.component.css"]
})
export class ApartmentComponent implements OnInit {
  apartments: Observable<Apartment[]>;

  constructor(private apartmentService: ApartmentService,
              private router: Router) {}
  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.apartments = this.apartmentService.getApartmentsList();
  }
}
