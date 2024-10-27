import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})
export class RidesComponent implements OnInit {

  currentdata : any;
  constructor(private router: Router) { }

  ngOnInit( ): void {
  }

  backbutton() {
    this.router.navigate(['home']);
  }

}
