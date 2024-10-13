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
      loginNumber: ['', Validators.required],
      otp : ['', Validators.required],
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

}
