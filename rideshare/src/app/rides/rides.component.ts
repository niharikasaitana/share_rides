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
    this.currentdata.push(ridedata);
    this.journeydata.push(jdata);
    console.log(this.currentdata);
  }

}
