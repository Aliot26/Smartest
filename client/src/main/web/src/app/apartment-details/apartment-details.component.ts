import {Component, OnInit} from '@angular/core';
import {ApartmentDataService} from "../service/apartment-data.service";
import {Apartment} from "../apartment/apartment";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css']
})
export class ApartmentDetailsComponent implements OnInit {

  id: number;
  apartment: Apartment;

  constructor(
    private apartmentDataService: ApartmentDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.apartment = new Apartment();
    this.apartmentDataService.retrieveApartment(this.id)
      .subscribe(
        data => this.apartment = data
      )
  }


  saveApartment() {
    this.apartmentDataService.updateApartment(this.id, this.apartment)
      .subscribe(
        data => {
          this.router.navigate(['apartments']);
        }
      )
  }
}
