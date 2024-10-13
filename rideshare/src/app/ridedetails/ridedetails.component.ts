import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ridedetails',
  templateUrl: './ridedetails.component.html',
  styleUrls: ['./ridedetails.component.css']
})
export class RidedetailsComponent implements OnInit {

  showbreakup = false;
  ridedeatils:any={};
  placedeatils:any={};

  constructor() { }

  ngOnInit(): void {
    this.ridedeatils = JSON.parse(localStorage.getItem('rideDetails') ?? ' ');
    this.placedeatils = JSON.parse(localStorage.getItem('placeDetails') ?? ' ');
    console.log(this.ridedeatils);
    console.log(this.placedeatils);
  }

  bookRide(){
    
    let login = JSON.parse(localStorage.getItem('login') ?? '0');
    if(!login)
    {
      
    }
  }

}
