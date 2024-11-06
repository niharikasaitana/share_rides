import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RidedetailsComponent } from './ridedetails/ridedetails.component';
import { RidesComponent } from './rides/rides.component';
import { PublishrideComponent } from './publishride/publishride.component';
import { ShipmentsComponent } from './shipments/shipments.component';
import { SearchdeliveryComponent } from './searchdelivery/searchdelivery.component';
import { DeliverydetailsComponent } from './deliverydetails/deliverydetails.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ridedetails', component: RidedetailsComponent},
  {path: 'myrides', component: RidesComponent},
  { path: 'publishride', component: PublishrideComponent},
  { path:'shippments', component: ShipmentsComponent},
  { path :'searchdelievry', component: SearchdeliveryComponent},
  { path:'deliverydetails', component: DeliverydetailsComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
