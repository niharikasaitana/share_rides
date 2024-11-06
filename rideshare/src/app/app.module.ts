import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DatePipe } from '@angular/common';
import { DecmialpipePipe } from './pipes/decmialpipe.pipe';
import { RidedetailsComponent } from './ridedetails/ridedetails.component';
import { RidesComponent } from './rides/rides.component';
import { PublishrideComponent } from './publishride/publishride.component';
import { ShipmentsComponent } from './shipments/shipments.component';
import { SearchdeliveryComponent } from './searchdelivery/searchdelivery.component';
import { DeliverydetailsComponent } from './deliverydetails/deliverydetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    DecmialpipePipe,
    RidedetailsComponent,
    RidesComponent,
    PublishrideComponent,
    ShipmentsComponent,
    SearchdeliveryComponent,
    DeliverydetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,

  ],
    providers: [DatePipe,BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
