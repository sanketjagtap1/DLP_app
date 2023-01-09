import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

  register = new FormGroup({
    name: new FormControl('', Validators.required)
  })

  constructor() { }

  ngOnInit() {}

  registerUser(userData:any){
    console.log(userData)
  }

}
