import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-publishride',
  templateUrl: './publishride.component.html',
  styleUrls: ['./publishride.component.css']
})
export class PublishrideComponent implements OnInit {

  homeForm: FormGroup;
  loginForm: FormGroup;
  minDate = new Date();
  AdultCount = 1;
  sourceList = ['Hyderabad', 'Bangalore', 'Jaipur', 'Surat', 'Pune', 'Andhra Pradesh', 'Chennai', 'Mumbai'];
  destinationList = ['Hyderabad', 'Bangalore', 'Jaipur', 'Surat', 'Pune', 'Andhra Pradesh', 'Chennai', 'Mumbai'];
  sortedList: string[] = [];
  selectedSource: string | null = null;
  selectedDestination: string | null = null;
  sourceTouched: boolean = false;
  destinationTouched: boolean = false;
  selectedVechileType:string[]=[];
  vechilesList = ['Bike','Cab-Sedan','Auto'] ;
  numberFailed=false;
  otpSend = false;
  register = false;
  constructor(private fb: FormBuilder, private datePipe: DatePipe, private router: Router,private modalService: BsModalService) {
    this.homeForm = this.fb.group({
      Source: ['', Validators.required],
      Destination: ['', Validators.required],
      startdate: ['', Validators.required],
      fareprice:['', Validators.required],
      Adultcount: [1, Validators.required],
      vechileType:['', Validators.required],
    });
    this.loginForm = this.fb.group({
      loginNumber: ['', [Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern(/^[6-9][0-9]{9}$/)]],
      otp : ['', [Validators.required,Validators.pattern(/^[0-9]{4}$/)]],
      firstName: ['', [Validators.required,Validators.pattern(/^[A-z]$/),Validators.maxLength(10)]],
      lastName: ['', [Validators.required,Validators.pattern(/^[A-z]$/),Validators.maxLength(10)]],
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
  @ViewChild('template')
  public template!: TemplateRef<any>;
  @ViewChild('sucessTemplate')
  public sucessTemplate!: TemplateRef<any>;
  modalRef!: BsModalRef;
  config = {
    windowClass: 'myDialog',
    class: 'modal-dialog-centered',
  };
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

  publishRides(){
    if(this.homeForm.valid)
    {
      let login = JSON.parse(localStorage.getItem('loginDetails') ?? '0');
      if(!login)
        {
          this.openmodal(this.template);
        }
        else{
              this.openmodal(this.sucessTemplate);
        }

    }
    else{
      alert('enter valid data');
    }
  }

  openmodal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  closeBook(){
    localStorage.setItem('publishRide', JSON.stringify(this.homeForm.value));
    this.modalclose();
    this.router.navigateByUrl('myrides');
  }

  modalclose() {
    this.modalRef.hide();
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    const regPattern = /^[6-9][0-9]{9}$/;
    if(this.loginForm.value.loginNumber.length > 8 && regPattern.test(this.loginForm.value.loginNumber))
    this.numberFailed=false
    let inputChar = String.fromCharCode(event.charCode);
    if (
      (event.keyCode != 8 && !pattern.test(inputChar)) ||
      event.target.value.length > 9 ||
      event.keyCode == 43 ||
      event.keyCode == 45
    ) {
      event.preventDefault();
    }
  }

  Continue(event: any) {
    const regPattern = /^[6-9][0-9]{9}$/;
    if(this.loginForm.value.loginNumber.length>8 && regPattern.test(this.loginForm.value.loginNumber))
    this.numberFailed = false;
    if (event.keyCode === 13 && this.loginForm.value.loginNumber.length == 10 && regPattern.test(this.loginForm.value.loginNumber)) {
      this.numberFailed = false;
      //this.otpsend();
    }
    if(event.keyCode === 13 && (this.loginForm.value.loginNumber.length != 10 || regPattern.test(this.loginForm.value.loginNumber) ))
    {
      this.numberFailed = true;
    }
   
  }

  registercal(){
    this.otpSend=true;
    this.register = true;
  }

  login(){
    localStorage.setItem('loginDetails',JSON.stringify(this.loginForm.value));
    this.modalclose();
  }

 

}
