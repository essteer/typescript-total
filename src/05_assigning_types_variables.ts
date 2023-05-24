// Set defaultUser to type User

// interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
//   isAdmin: boolean;
// }
/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
// const defaultUser = {};

// const getUserId = (user: User) => {
//   return user.id;
// };

// Solution:
interface User {
    id: number;
    firstName: string;
    lastName: string;
    isAdmin: boolean;
  }

const defaultUser: User = {
    id: 1,
    firstName: "John",
    lastName: "Smith",
    isAdmin: false,
};

const getUserId = (user: User) => {
  return user.id;
};