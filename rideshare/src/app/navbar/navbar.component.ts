import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sidebarShow: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

   //sidebar open
   opensettings() {
    this.sidebarShow = !this.sidebarShow;
   // this.getprofiledetails();
  }

  myride() {
  //  this.router.navigate(['rides']);
    this.sidebarShow = !this.sidebarShow;
  }

}
