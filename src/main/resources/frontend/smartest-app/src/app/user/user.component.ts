import { Component, OnInit } from '@angular/core';
import {User} from "./user";
import {UserDataService} from "../service/user-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  message: string;

  constructor(private userDataService: UserDataService,
              private router: Router) { }

  ngOnInit() {
   this.refreshUsersList();
  }

  refreshUsersList(){
    this.userDataService.retrieveAllUsers().subscribe(
      response =>{
        console.log(response);
        this.users = response;
      }
    )
  }

  deleteUser(userId){
    this.userDataService.deleteUser(userId).subscribe(
      response =>{
        this.message = `Delete User ${userId} Successful!`;
        this.refreshUsersList();
      }
    )
  }

  updateUser(userId){
    console.log("Update " + userId);
    this.router.navigate(['user', userId]);
  }



}
