import {RouterModule, Routes} from "@angular/router";
import {ApartmentComponent} from "./apartment/apartment.component";
import {NgModule} from "@angular/core";
import {ApartmentDetailsComponent} from "./apartment-details/apartment-details.component";
import {UserComponent} from "./user/user.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {LocalForecastComponent} from "./local-forecast/local-forecast.component";

const routes: Routes = [
  {path: '', component: LocalForecastComponent},
  {path: 'apartments', component: ApartmentComponent},
  {path: 'apartment/:id', component: ApartmentDetailsComponent},
  {path: 'users', component: UserComponent},
  {path: 'user/:id', component: UserDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
