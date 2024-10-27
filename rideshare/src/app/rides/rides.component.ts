import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})
export class RidesComponent implements OnInit {

  currentdata : any = [];
  constructor(private router: Router) { }

  ngOnInit( ): void {
    this.dataRetrive()
  }

  backbutton() {
    this.router.navigate(['home']);
  }

  dataRetrive(){
    let ridedata = JSON.parse(localStorage.getItem('placeDetails') || '{}');
    this.currentdata.push(ridedata);
  }

}
