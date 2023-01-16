import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  userType:any;
  id:any;
  email:any;
  mobile:any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.userType=localStorage.getItem('userType');
    this.id=localStorage.getItem('id');
    this.email=localStorage.getItem('email');
    this.mobile=localStorage.getItem('mobile');
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['auth/login']);
  }

}
