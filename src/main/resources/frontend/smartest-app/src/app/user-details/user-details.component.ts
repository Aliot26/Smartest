import {Component, OnInit} from '@angular/core';
import {UserDataService} from "../service/user-data.service";
import {RolesService} from "../service/roles.service";
import {User} from "../user/user";
import {ActivatedRoute, Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {UserRole} from "../user/userRole";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id: number;
  user: User;
  userForm: FormGroup;
  roles: UserRole[];

  constructor(
    private userDataService: UserDataService,
    private rolesService: RolesService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.user = new User(this.id, '', '', '', '', null);

    if (this.id != -1) {
      this.userDataService.retrieveUser(this.id)
        .subscribe(
          response => {
            this.user = response;
            console.log(response);
          }
        )
    }
    this.rolesService.retrieveAllRoles().subscribe(
      response => {this.roles = response;
      }
    );
    this.initForm();
  }

  initForm() {
    this.userForm = this.fb.group({
      userId: [{value: this.id, disabled: true}],
      username: ['', [
        Validators.required,
        Validators.pattern(/^[A-z0-9]*$/)
      ]],
      firstName: ['', [
        Validators.required,
        Validators.pattern(/^[A-z0-9]*$/)
      ]],
      lastName: ['', [
        Validators.required,
        Validators.pattern(/^[A-z0-9]*$/)
      ]],
      userRole: ['']
    });
  }
  //TODO add validation


  save(userForm) {
    this.user.username = userForm.value.username;
    this.user.firstName = userForm.value.firstName;
    this.user.lastName = userForm.value.lastName;
    
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

  getUserRole(role) {
    this.user.userRole = this.roles.find(item =>item.role === role);
  }
}
