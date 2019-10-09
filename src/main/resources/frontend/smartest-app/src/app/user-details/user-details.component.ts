import {Component, OnInit} from '@angular/core';
import {UserDataService} from "../service/user-data.service";
import {User} from "../user/user";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id: number;
  user: User;

  constructor(
    private userDataService: UserDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.user = new User(this.id, '', '', '', '', null)

    if (this.id != -1) {
      this.userDataService.retrieveUser(this.id)
        .subscribe(
          response => this.user = response
        )
    }
  }

  save() {
    if (this.id === -1) {
      this.userDataService.createUser(this.user)
        .subscribe(
          data => {
            this.router.navigate(['users'])
          }
        )
    } else {
      this.userDataService.updateUser(this.id, this.user)
        .subscribe(
          data => {
            this.router.navigate(['users'])
          }
        )
    }
  }

}
