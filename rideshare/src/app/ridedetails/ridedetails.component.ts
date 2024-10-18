import { Component, OnInit,TemplateRef, ViewChild  } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ridedetails',
  templateUrl: './ridedetails.component.html',
  styleUrls: ['./ridedetails.component.css']
})
export class RidedetailsComponent implements OnInit {
  loginForm: FormGroup;
  showbreakup = false;
  ridedeatils:any={};
  placedeatils:any={};
  @ViewChild('template')
  public template!: TemplateRef<any>;
  numberFailed=false;
  otpSend = false;
  modalRef!: BsModalRef;
  selfconfig = {
    class: 'modal-dialog-centered',
  };
  
  config = {
    windowClass: 'myDialog',
    class: 'modal-dialog-centered',
  };

  constructor(private modalService: BsModalService,private fb: FormBuilder,) { 
    this.loginForm = this.fb.group({
      loginNumber: ['', [Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern(/^[6-9][0-9]{9}$/)]],
      otp : ['', [Validators.required,Validators.pattern(/^[0-9]{4}$/)]],
    })
  }

  ngOnInit(): void {
    this.ridedeatils = JSON.parse(localStorage.getItem('rideDetails') ?? ' ');
    this.placedeatils = JSON.parse(localStorage.getItem('placeDetails') ?? ' ');
    console.log(this.ridedeatils);
    console.log(this.placedeatils);
  }

  bookRide(){
    
    let login = JSON.parse(localStorage.getItem('login') ?? '0');
    if(!login)
    {
      this.openmodal(this.template);
    }
  }

  openmodal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
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

}
