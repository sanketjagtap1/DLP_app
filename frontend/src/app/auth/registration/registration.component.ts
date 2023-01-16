import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

  register = new FormGroup({
    name: new FormControl('', Validators.required)
  })

  constructor(private authSrv: AuthService,
    private router: Router) { }

  ngOnInit() {}
  
  registerUser(data: any) {
    console.log(data)
    this.authSrv.registration(data).subscribe({
      next: (result) => {
        console.log(result)
        console.log(result.newStudent.userType)
        
          this.router.navigate(['auth/login']);
      
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

}
