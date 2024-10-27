import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sidebarShow: boolean = false;
  loginData: any = ' ';
  loginDataRetrived = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginDataRetrive();
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

  loginDataRetrive() {
    const storedData = localStorage.getItem('loginDetails');

    if (storedData) {
      try {
        this.loginData = JSON.parse(storedData);
        this.loginDataRetrived = true;
      } catch (error) {
        console.error('Error parsing JSON:', error);
        this.loginDataRetrived = false;
        this.loginData = {}; // Default value or appropriate error handling
      }
    } else {
      this.loginData = {}; // Default value
      this.loginDataRetrived = false;

    }

  }

  hasLoginDataKeys(): boolean {
    return Object.keys(this.loginData).length > 0;
  }

}
