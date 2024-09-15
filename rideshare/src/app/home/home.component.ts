import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeForm: FormGroup;
  minDate = new Date();
  AdultCount = 1;
  sourceList = ['Hyderabad', 'Bangalore', 'Jaipur', 'Surat', 'Pune', 'Andhra Pradesh', 'Chennai', 'Mumbai'];
  destinationList = ['Hyderabad', 'Bangalore', 'Jaipur', 'Surat', 'Pune', 'Andhra Pradesh', 'Chennai', 'Mumbai'];
  sortedList: string[] = [];
  selectedSource: string | null = null;
  selectedDestination: string | null = null;
  sourceTouched: boolean = false;
  destinationTouched: boolean = false;
  constructor(private fb: FormBuilder, private datePipe: DatePipe) {
    this.homeForm = this.fb.group({
      Source: ['', Validators.required],
      Destination: ['', Validators.required],
      startdate: [new DatePipe('en-US').transform(this.minDate, 'yyyy-MM-dd'), Validators.required],

      Adultcount: [1, Validators.required],
    });
  }

  ngOnInit(): void {

  }

  searchResult(event: KeyboardEvent, feildType: string) {
    if (feildType == 'source') {
      this.sourceTouched = true;
      this.destinationTouched = false;
    }
    else {
      this.sourceTouched = false;
      this.destinationTouched = true;
    }


    this.sortedList = [];
    let input = (event.target as HTMLInputElement).value
    this.sortedList = this.sourceList.filter((x) => {
      return x.toLowerCase().includes(input.toLowerCase());
    });
  }

  selectionCall(selectedPlace: string, feildType: string) {
    this.sortedList = [];
    this.sourceTouched = false;
    this.destinationTouched = false;
    if (feildType == 'source')
       { 
        this.selectedSource = selectedPlace;
        this.homeForm.patchValue({
          Source : this.selectedSource
        });
       }
    else { this.selectedDestination = selectedPlace;
      this.homeForm.patchValue({
        Destination : this.selectedDestination
      });
     }
  }

  getRides(){
    console.log(this.homeForm.value);
    console.log('get',this.homeForm.valid);
  }

}
