import { DatePipe } from '@angular/common';
import { Component, MissingTranslationStrategy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeForm: FormGroup;
  minDate = new Date();
  AdultCount = 1;
  selectedFliter = "cheaper";
  sourceList = ['Hyderabad', 'Bangalore', 'Jaipur', 'Surat', 'Pune', 'Andhra Pradesh', 'Chennai', 'Mumbai'];
  destinationList = ['Hyderabad', 'Bangalore', 'Jaipur', 'Surat', 'Pune', 'Andhra Pradesh', 'Chennai', 'Mumbai'];
  sortedList: string[] = [];
  selectedSource: string | null = null;
  selectedDestination: string | null = null;
  sourceTouched: boolean = false;
  destinationTouched: boolean = false;
  selectedVechileType:string[]=[];
  constructor(private fb: FormBuilder, private datePipe: DatePipe, private router: Router) {
    this.homeForm = this.fb.group({
      Source: ['', Validators.required],
      Destination: ['', Validators.required],
      startdate: [new DatePipe('en-US').transform(this.minDate, 'yyyy-MM-dd'), Validators.required],

      Adultcount: [1, Validators.required],
    });
  }
  showRides = false;
  ridesList = [
    {
      vechileType: 'AUTO',
      fare: 250.00,
      Time: 120,
      distance: '120km',
      dateTime: '27-01-2024, 12:55PM',
      rating: 4.0,
      driverName: 'raju kumar'
    },
    {
      vechileType: 'CAB-SEDAN',
      fare: 350.00,
      Time: 120,
      distance: '120km',
      dateTime: '27-01-2024, 13:55PM',
      rating: 4.0,
      driverName: 'kiran Roa'
    },
    {
      vechileType: 'CAB-SUV',
      fare: 450.00,
      Time: 120,
      distance: '120km',
      dateTime: '27-01-2024, 04:55AM',
      rating: 4.0,
      driverName: 'PREETHI'
    },
    {
      vechileType: 'BIKE',
      fare: 150.00,
      Time: 20,
      distance: '120km',
      dateTime: '27-01-2024, 18:55PM',
      rating: 3.0,
      driverName: 'MANI'
    },
    {
      vechileType: 'CAB-SEDAN',
      fare: 350.00,
      Time: 120,
      distance: '120km',
      dateTime: '27-01-2024, 10:55AM',
      rating: 3.5,
      driverName: 'KRISHNA KUMAR'
    },
  ];
  fliteredList = [];
  ngOnInit(): void {
this.fliter('cheaper');
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
    if (feildType == 'source') {
      this.selectedSource = selectedPlace;
      this.homeForm.patchValue({
        Source: this.selectedSource
      });
    }
    else {
      this.selectedDestination = selectedPlace;
      this.homeForm.patchValue({
        Destination: this.selectedDestination
      });
    }
  }

  getRides() {

    if (this.homeForm.valid) {
      this.showRides = true;
    }
  }

  fliter(fliterName: string) {
    if (fliterName == 'cheaper') {
      this.selectedFliter = 'cheaper';
      this.ridesList.sort((a,b)=> a.fare - b.fare);
    }
    else if (fliterName == 'faster') {
      this.selectedFliter = 'faster';
      this.ridesList.sort((a,b)=> a.Time - b.Time);
    }
    else {
      this.selectedFliter = 'Convenice';
      this.ridesList.sort((a,b)=> a.fare - b.fare);
    }
  }

  fliterVechiletype(type:string){
    if(this.selectedVechileType.includes(type))
    {
      let index = this.selectedVechileType.indexOf(type);
      this.selectedVechileType.splice(index,1);
    }
    else
    {
      this.selectedVechileType.push(type)
    }
  }

  ridedeatils(index: number){
    localStorage.setItem('rideDetails', JSON.stringify(this.ridesList[index]));
    this.router.navigateByUrl('ridedetails');
  }

}
