import {RouterModule, Routes} from "@angular/router";
import {ApartmentComponent} from "./apartment/apartment.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', component: ApartmentComponent},
  {path: 'apartments', component: ApartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
