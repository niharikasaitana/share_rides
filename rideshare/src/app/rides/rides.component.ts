import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})
export class RidesComponent implements OnInit {

  currentdata : any = [];
  journeydata:any = [];
  publishRides:any =[];
  deliveryservices:any[]=[];
  constructor(private router: Router) { }

  ngOnInit( ): void {
    this.dataRetrive()
  }

  backbutton() {
    this.router.navigate(['home']);
  }

  dataRetrive(){
    let ridedata = JSON.parse(localStorage.getItem('placeDetails') || '{}');
    let jdata = JSON.parse(localStorage.getItem('rideDetails') || '{}');
    let pdata = JSON.parse(localStorage.getItem('publishRide') || '{}');
    let dsdata = JSON.parse(localStorage.getItem('publishShippemnt') || '{}');
    this.currentdata.push(ridedata);
    this.journeydata.push(jdata);
    this.publishRides.push(pdata);
    this.deliveryservices.push(dsdata);
    console.log(this.currentdata);
  }

}
