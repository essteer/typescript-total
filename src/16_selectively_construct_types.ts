// Create a new type from User that takes only firstName and lastName
interface User {
    id: string;
    firstName: string;
    lastName: string;
  }
  
/**
* How do we create a new object type with _only_ the
* firstName and lastName properties of User?
*/
  
// type MyType = unknown;

// Solution 1:
type MyType = Pick<User, "firstName" | "lastName">;

// Solution 2:
type MyType2 = Omit<User, "id">