// interface User2 {
//     id: number;
//     firstName: string;
//     lastName: string;
//     /**
//      * How do we ensure that role is only one of:
//      * - 'admin'
//      * - 'user'
//      * - 'super-admin'
//      */
//     role: string;
//   }

// Solution:
interface User2 {
    id: number;
    firstName: string;
    lastName: string;
    role: "admin" | "user" | "super-admin" | UltraAdmin;
  }

  type UltraAdmin = "ultra-admin"