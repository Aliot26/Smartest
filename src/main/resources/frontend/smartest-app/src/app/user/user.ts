import {UserRole} from "./userRole";

export class User {

  userId: number;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  userRole: UserRole;

  constructor(
    userId: number,
    username: string,
    firstName: string,
    lastName: string,
    password: string,
    userRole: UserRole
  ) {
  }
}
