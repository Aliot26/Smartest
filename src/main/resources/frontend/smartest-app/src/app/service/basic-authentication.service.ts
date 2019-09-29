import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "../app.constants";
import {map} from "rxjs/operators";

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http: HttpClient
  ) {
  }

  executeJWTAuthenticationService(username, password) {

    return this.http.post<any>(
      `${API_URL}/authenticate`, {
        username,
        password
      }).pipe(
      map(
        data => {
          localStorage.setItem(AUTHENTICATED_USER, username);
          localStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        }
      )
    );
  }

  getAuthenticatedUser() {
    return localStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return localStorage.getItem(TOKEN);
    }
  }

  isUserLoggedIn() {
    const user = localStorage.getItem(AUTHENTICATED_USER);
    return (user != null);
  }

  logout() {
    localStorage.removeItem(AUTHENTICATED_USER);
    localStorage.removeItem(TOKEN);

  }
}
