export class User {

  userId: number;
  username: string;
  firstName: string;
  lastName: string;
  password: number;
  userRole: number;

  constructor(
    userId: number,
    username: string,
    firstName: string,
    lastName: string,
    password: number,
    userRole: number
  ) {
  }
}

// interface User1 {
//   userId: number;
//   username: string;
//   firstName: string;
//   lastName: string;
//   password: number;
//   userRole: number;
// }
//
// let u: any;
//
// u = {
//   userId: 0,
//   username: "x",
//   firstName: "a",
//   lastName: "x",
//   password: 123412,
//   userRole: 223231,
// };
//
// const user: User1 = u;

