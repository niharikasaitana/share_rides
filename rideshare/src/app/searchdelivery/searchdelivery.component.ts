import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchdelivery',
  templateUrl: './searchdelivery.component.html',
  styleUrls: ['./searchdelivery.component.css']
})
export class SearchdeliveryComponent implements OnInit {
  homeForm: FormGroup;
  minDate = new Date();
  AdultCount = 1;
  selectedFliter = "cheaper";
  sourceList = ['Hyderabad', 'Bangalore', 'Jaipur', 'Surat', 'Pune', 'Andhra Pradesh', 'Chennai', 'Mumbai'];
  destinationList = ['Hyderabad', 'Bangalore', 'Jaipur', 'Surat', 'Pune', 'Andhra Pradesh', 'Chennai', 'Mumbai'];
  vechilesList = ['Bike', 'Cab', 'Auto', 'Lorry (Units)',
    'Lorry (Tons)',
    'Lorry (Tyre Type)']
  sortedList: string[] = [];
  selectedSource: string | null = null;
  selectedDestination: string | null = null;
  sourceTouched: boolean = false;
  destinationTouched: boolean = false;
  selectedVechileType: string[] = [];
  selectedVechile = '';
  selectedWeight = '';
  constructor(private fb: FormBuilder, private datePipe: DatePipe, private router: Router) {
    this.homeForm = this.fb.group({
      Source: ['', Validators.required],
      Destination: ['', Validators.required],
      startdate: [new DatePipe('en-US').transform(this.minDate, 'yyyy-MM-dd'), Validators.required],
      vechileType: ['', Validators.required],
      deliveryWight: ['', Validators.required],
    });
  }
  showRides = false;
  ridesList = [
    {
      vechileType: 'AUTO',
      fare: 250.00,
      Time: 110,
      distance: '120km',
      dateTime: '27-01-2024, 12:55PM',
      rating: 4.0,
      driverName: 'raju kumar',
      weight: '20kgs'
    },
    {
      vechileType: 'AUTO',
      fare: 150.00,
      Time: 60,
      distance: '120km',
      dateTime: '27-01-2024, 12:55PM',
      rating: 4.0,
      driverName: 'ravi',
      weight: '20kgs'
    },
    {
      vechileType: 'AUTO',
      fare: 180.00,
      Time: 120,
      distance: '120km',
      dateTime: '27-01-2024, 12:55PM',
      rating: 4.0,
      driverName: 'kumar',
      weight: '20kgs'
    },
    {
      vechileType: 'AUTO',
      fare: 250.00,
      Time: 120,
      distance: '120km',
      dateTime: '27-01-2024, 12:55PM',
      rating: 4.0,
      driverName: 'ravi kumar',
      weight: '10kgs'
    },
    {
      vechileType: 'AUTO',
      fare: 250.00,
      Time: 120,
      distance: '120km',
      dateTime: '27-01-2024, 12:55PM',
      rating: 4.0,
      driverName: 'kumar  vijay',
      weight: '15kgs'
    },
    {
      vechileType: 'AUTO',
      fare: 250.00,
      Time: 120,
      distance: '120km',
      dateTime: '27-01-2024, 12:55PM',
      rating: 4.0,
      driverName: 'vijay',
      weight: '35kgs'
    },
    {
      vechileType: 'CAB-SEDAN',
      fare: 350.00,
      Time: 120,
      distance: '120km',
      dateTime: '27-01-2024, 13:55PM',
      rating: 4.0,
      weight: '15kgs',
      driverName: 'kiran Roa'
    },
    {
      vechileType: 'CAB-SEDAN',
      fare: 350.00,
      Time: 120,
      distance: '120km',
      dateTime: '27-01-2024, 13:55PM',
      rating: 4.0,
      weight: '25kgs',
      driverName: 'kiran'
    },
    {
      vechileType: 'CAB-SEDAN',
      fare: 350.00,
      Time: 120,
      distance: '120km',
      dateTime: '27-01-2024, 13:55PM',
      rating: 4.0,
      weight: '5kgs',
      driverName: 'kumar Roa'
    },
    {
      vechileType: 'CAB-SUV',
      fare: 450.00,
      Time: 120,
      distance: '120km',
      dateTime: '27-01-2024, 04:55AM',
      rating: 4.0,
      weight: '35kgs',
      driverName: 'PREETHI'
    },
    {
      vechileType: 'CAB-SUV',
      fare: 350.00,
      Time: 150,
      distance: '120km',
      dateTime: '27-01-2024, 04:55AM',
      rating: 4.0,
      weight: '35kgs',
      driverName: 'Priya'
    },
    {
      vechileType: 'CAB-SUV',
      fare: 550.00,
      Time: 90,
      distance: '120km',
      dateTime: '27-01-2024, 04:55AM',
      rating: 4.0,
      weight: '35kgs',
      driverName: 'Prakash'
    },
    {
      vechileType: 'CAB-SUV',
      fare: 450.00,
      Time: 120,
      distance: '120km',
      dateTime: '27-01-2024, 04:55AM',
      rating: 4.0,
      weight: '25kgs',
      driverName: 'Rahul'
    },
    {
      vechileType: 'BIKE',
      fare: 100.00,
      Time: 20,
      distance: '120km',
      dateTime: '27-01-2024, 18:55PM',
      rating: 3.0,
      driverName: 'MANI',
      weight: '5kgs',
    },
    {
      vechileType: 'BIKE',
      fare: 90.00,
      Time: 30,
      distance: '120km',
      dateTime: '27-01-2024, 18:55PM',
      rating: 3.0,
      driverName: 'Ravi',
      weight: '5kgs',
    },
    {
      vechileType: 'BIKE',
      fare: 100.00,
      Time: 25,
      distance: '120km',
      dateTime: '27-01-2024, 18:55PM',
      rating: 3.0,
      driverName: 'Rakesh',
      weight: '5kgs',
    },
    {
      vechileType: 'BIKE',
      fare: 150.00,
      Time: 10,
      distance: '120km',
      dateTime: '27-01-2024, 18:55PM',
      rating: 3.0,
      driverName: 'MANI kumar',
      weight: '3kgs',
    },
    {
      vechileType: 'BIKE',
      fare: 120.00,
      Time: 15,
      distance: '120km',
      dateTime: '27-01-2024, 18:55PM',
      rating: 3.0,
      driverName: 'kumar',
      weight: '2kgs',
    },
    {
      vechileType: 'CAB-SEDAN',
      fare: 350.00,
      Time: 120,
      distance: '120km',
      dateTime: '27-01-2024, 10:55AM',
      rating: 3.5,
      driverName: 'KRISHNA KUMAR',
      weight: '20kgs'
    },
    {
      vechileType: 'Lorry (Units)',
      fare: 2350.00,
      Time: 120,
      distance: '120km',
      dateTime: '27-01-2024, 10:55AM',
      rating: 3.5,
      driverName: 'KRISHNA KUMAR',
      weight: '10 Units'
    },
    {
      vechileType: 'Lorry (Units)',
      fare: 1350.00,
      Time: 220,
      distance: '120km',
      dateTime: '27-01-2024, 10:55AM',
      rating: 3.5,
      driverName: 'KRISHNA',
      weight: '10 Units'
    },
    {
      vechileType: 'Lorry (Units)',
      fare: 5350.00,
      Time: 120,
      distance: '120km',
      dateTime: '27-01-2024, 10:55AM',
      rating: 3.5,
      driverName: 'Ravi',
      weight: '30 Units'
    },
    {
      vechileType: 'Lorry (Tons)',
      fare: 2350.00,
      Time: 120,
      distance: '120km',
      dateTime: '27-01-2024, 10:55AM',
      rating: 3.5,
      driverName: 'Ravi',
      weight: '3 Tons'
    },
    {
      vechileType: 'Lorry (Tons)',
      fare: 235000.00,
      Time: 120,
      distance: '120km',
      dateTime: '27-01-2024, 10:55AM',
      rating: 3.5,
      driverName: 'Rahul',
      weight: '25 Tons'
    },
    {
      vechileType: 'Lorry (Tons)',
      fare: 135000.00,
      Time: 520,
      distance: '120km',
      dateTime: '27-01-2024, 10:55AM',
      rating: 3.5,
      driverName: 'Rakesh',
      weight: '25 Tons'
    },
    {
      vechileType: 'Lorry (Tons)',
      fare: 15000.00,
      Time: 620,
      distance: '120km',
      dateTime: '27-01-2024, 10:55AM',
      rating: 3.5,
      driverName: 'Ram',
      weight: '25 Tons'
    },
    {
      vechileType: 'Lorry (Tons)',
      fare: 185000.00,
      Time: 60,
      distance: '120km',
      dateTime: '27-01-2024, 10:55AM',
      rating: 3.5,
      driverName: 'Rocket ramesh',
      weight: '25 Tons'
    },
    {
      vechileType: 'Lorry (Tons)',
      fare: 135000.00,
      Time: 120,
      distance: '120km',
      dateTime: '27-01-2024, 10:55AM',
      rating: 3.5,
      driverName: 'Ramana',
      weight: '15 Tons'
    },
    {
      vechileType: 'Lorry (Tons)',
      fare: 185000.00,
      Time: 120,
      distance: '120km',
      dateTime: '27-01-2024, 10:55AM',
      rating: 3.5,
      driverName: 'Mahesh',
      weight: '25 Tons'
    },
    {
      vechileType: 'Lorry (Tyre Type)',
      fare: 185000.00,
      Time: 120,
      distance: '120km',
      dateTime: '27-01-2024, 10:55AM',
      rating: 3.5,
      driverName: 'Mahesh',
      weight: '8 Tyre'
    },
    {
      vechileType: 'Lorry (Tyre Type)',
      fare: 15000.00,
      Time: 190,
      distance: '120km',
      dateTime: '27-01-2024, 10:55AM',
      rating: 3.5,
      driverName: 'Rahesh',
      weight: '8 Tyre'
    },
    {
      vechileType: 'Lorry (Tyre Type)',
      fare: 18000.00,
      Time: 100,
      distance: '120km',
      dateTime: '27-01-2024, 10:55AM',
      rating: 3.5,
      driverName: 'Rahul',
      weight: '8 Tyre'
    },
    {
      vechileType: 'Lorry (Tyre Type)',
      fare: 585000.00,
      Time: 120,
      distance: '120km',
      dateTime: '27-01-2024, 10:55AM',
      rating: 3.5,
      driverName: 'Krishna',
      weight: '16 Tyre'
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
      this.selectedVechile = this.homeForm.get('vechileType')?.value;
      this.selectedWeight = this.homeForm.get('deliveryWight')?.value;
      switch(this.selectedVechile){
        case 'Bike':
          this.selectedWeight = this.selectedWeight+'kgs';
          break;
        case 'Cab':
          this.selectedWeight = this.selectedWeight+'kgs';
          break;
        case 'Auto':
          this.selectedWeight = this.selectedWeight+'kgs';
          break;
        case 'Lorry (Units)':
          this.selectedWeight = this.selectedWeight+' Units';
          break;
        case 'Lorry (Tons)':
          this.selectedWeight = this.selectedWeight+' Tons';  
          break;
        case 'Lorry (Tyre Type)':
            this.selectedWeight = this.selectedWeight+' Tyre';  
            break;  
      }
      localStorage.setItem('placeDetails', JSON.stringify(this.homeForm.value));
    }
  }

  fliter(fliterName: string) {
    if (fliterName == 'cheaper') {
      this.selectedFliter = 'cheaper';
      this.ridesList.sort((a, b) => a.fare - b.fare);
    }
    else if (fliterName == 'faster') {
      this.selectedFliter = 'faster';
      this.ridesList.sort((a, b) => a.Time - b.Time);
    }
    else {
      this.selectedFliter = 'Convenice';
      this.ridesList.sort((a, b) => a.fare - b.fare);
    }
  }

  fliterVechiletype(type: string) {
    if (this.selectedVechileType.includes(type)) {
      let index = this.selectedVechileType.indexOf(type);
      this.selectedVechileType.splice(index, 1);
    }
    else {
      this.selectedVechileType.push(type)
    }
  }

  ridedeatils(index: number) {
    localStorage.setItem('rideDetails', JSON.stringify(this.ridesList[index]));
    this.router.navigateByUrl('ridedetails');
  }
}
