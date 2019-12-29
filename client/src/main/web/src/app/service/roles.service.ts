import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URL} from "../app.constants";
import {UserRole} from "../user/userRole";

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: HttpClient) { }

  public retrieveAllRoles(): Observable<UserRole[]>  {
    return this.http.get<UserRole[]>(`${API_URL}/roles`);
  }
}
