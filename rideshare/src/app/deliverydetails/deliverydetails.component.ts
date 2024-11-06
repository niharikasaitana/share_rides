import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-deliverydetails',
  templateUrl: './deliverydetails.component.html',
  styleUrls: ['./deliverydetails.component.css']
})
export class DeliverydetailsComponent implements OnInit {
  loginForm: FormGroup;
  showbreakup = false;
  ridedeatils:any={};
  placedeatils:any={};
  @ViewChild('template')
  public template!: TemplateRef<any>;
  @ViewChild('sucessTemplate')
  public sucessTemplate!: TemplateRef<any>;
  numberFailed=false;
  otpSend = false;
  modalRef!: BsModalRef;
  register = false;
  selfconfig = {
    class: 'modal-dialog-centered',
  };
  
  config = {
    windowClass: 'myDialog',
    class: 'modal-dialog-centered',
  };

  constructor(private modalService: BsModalService,private fb: FormBuilder,private router: Router) { 
    this.loginForm = this.fb.group({
      loginNumber: ['', [Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern(/^[6-9][0-9]{9}$/)]],
      otp : ['', [Validators.required,Validators.pattern(/^[0-9]{4}$/)]],
      firstName: ['', [Validators.required,Validators.pattern(/^[A-z]$/),Validators.maxLength(10)]],
      lastName: ['', [Validators.required,Validators.pattern(/^[A-z]$/),Validators.maxLength(10)]],
    })
  }

  ngOnInit(): void {
    this.ridedeatils = JSON.parse(localStorage.getItem('deliverydetails') ?? ' ');
    this.placedeatils = JSON.parse(localStorage.getItem('placeDetails') ?? ' ');
    console.log(this.ridedeatils);
    console.log(this.placedeatils);
  }

  bookRide(){
    
    let login = JSON.parse(localStorage.getItem('loginDetails') ?? '0');
    if(!login)
    {
      this.openmodal(this.template);
    }
    else{
          this.openmodal(this.sucessTemplate);
    }

  }

  openmodal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  closeBook(){
    this.modalclose();
    let getservices = {
      source : this.placedeatils.Source,
      destination : this.placedeatils.Destination,
      date: this.ridedeatils.dateTime,
      time: this.ridedeatils.Time,
      vechiletype: this.ridedeatils.vechileType,
      weight : this.ridedeatils.weight,
      fare: this.ridedeatils.fare
    }
    localStorage.setItem('bookedDeliveryService', JSON.stringify(getservices));
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
