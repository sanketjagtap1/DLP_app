import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss'],
})
export class ManageUserComponent implements OnInit {
  userData:any;
  constructor() { }

  ngOnInit() {
    this.userData=[
      {name: 'sanket', mobile: 8806328987},
      {name: 'pratiksha', mobile: 1234567890},
      {name: 'Akash', mobile: 9987654321},
      {name: 'amit', mobile: 8806328987},
      {name: 'Akanksha', mobile: 1111111111}
    ]
  }

  

}
