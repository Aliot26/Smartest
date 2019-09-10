import {RouterModule, Routes} from "@angular/router";
import {ApartmentComponent} from "./apartment/apartment.component";
import {NgModule} from "@angular/core";
import {ApartmentDetailsComponent} from "./apartment-details/apartment-details.component";

const routes: Routes = [
  {path: '', component: ApartmentComponent},
  {path: 'apartments', component: ApartmentComponent},
  {path: 'apartment/:id', component: ApartmentDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
