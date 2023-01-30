import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  courseCount:any;
  userType:any;
  lectCount:any;
  constructor(private authSrv: AuthService,
    private router: Router) { }

  ngOnInit() {
    // get teacher count
    this.userType=localStorage.getItem('userType');
      this.authSrv.getCourseCount().subscribe({
        next: (result) => {
          console.log(result)
          this.courseCount = result.courseCount
        },
        error: (error) => {
          console.log(error)
        }
      })
    
  }

    
  

}
