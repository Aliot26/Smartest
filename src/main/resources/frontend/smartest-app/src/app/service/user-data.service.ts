import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../user/user";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) {
  }

  public retrieveAllUsers(){
    return this.http.get<User[]>(`http://localhost:8080/users`);
  }

  public deleteUser(userId){
    return this.http.delete(`http://localhost:8080/user/${userId}`)
  }

}
