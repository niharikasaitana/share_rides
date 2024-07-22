import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeForm:FormGroup;
  minDate = new Date();
  AdultCount=1;
  constructor(private fb: FormBuilder,private datePipe: DatePipe) {
    this.homeForm = this.fb.group({
      Source: ['', Validators.required],
      Destination: ['', Validators.required],
      startdate: [new DatePipe('en-US').transform(this.minDate, 'yyyy-MM-dd')],
    
      Adultcount: [1,Validators.required],
    });
   }

  ngOnInit(): void {
   
  }

}
