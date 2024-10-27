import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sidebarShow: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

   //sidebar open
   opensettings() {
    this.sidebarShow = !this.sidebarShow;
   // this.getprofiledetails();
  }

  myride() {
     this.router.navigate(['myrides']);
    this.sidebarShow = !this.sidebarShow;
  }

}
