import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BasicAuthenticationService} from "../service/basic-authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  userLogged = false;

  constructor(
    private router: Router,
    private basicAuthenticationService: BasicAuthenticationService
  ) {
  }

  ngOnInit() {
  }

  handleJWTAuthLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          this.userLogged = true;
          console.log(data);
          this.router.navigate(['']);
          this.invalidLogin = false;
        },
        // tslint:disable-next-line:no-shadowed-variable
        error => {
          console.log(error);
          this.invalidLogin = true;
          this.userLogged = false;
        }
      );
  }

  Logout() {
    this.userLogged = false;
    this.basicAuthenticationService.logout();
  }
}
