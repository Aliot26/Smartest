import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../user/user";
import {API_URL} from "../app.constants";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) {
  }

  public retrieveAllUsers(): Observable<User[]>  {
    return this.http.get<User[]>(`${API_URL}/users`);
  }

  public deleteUser(userId):Observable<User> {
    return this.http.delete<User>(`${API_URL}/user/${userId}`)
  }

  public retrieveUser(userId): Observable<User> {
    return this.http.get<User>(`${API_URL}/user/${userId}`)
  }

  public updateUser(userId, user) {
    return this.http.put(`${API_URL}/user/${userId}`, user)
  }

  public createUser(user) {
    return this.http.post(`${API_URL}/users`, user)
  }
}
