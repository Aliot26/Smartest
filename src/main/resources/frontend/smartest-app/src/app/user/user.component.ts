import { Component, OnInit } from '@angular/core';
import {User} from "./user";
import {UserDataService} from "../service/user-data.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
    this.userDataService.retrieveAllUsers().subscribe(
      response =>{
        console.log(response);
        this.users = response;
      }
    )
  }

}
