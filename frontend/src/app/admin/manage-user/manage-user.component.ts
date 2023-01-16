import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss'],
})
export class ManageUserComponent implements OnInit {
  userData: any;
  constructor(private authSrv: AuthService,
    private router: Router) { }

  ngOnInit() {

    // get teacher count

    this.authSrv.getUserList().subscribe({
      next: (result) => {
        console.log(result.allStudents          )
        this.userData = result.allStudents
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
