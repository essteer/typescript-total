// Type the createThenGetUser function
interface User {
    id: string;
    firstName: string;
    lastName: string;
  }
  
//   const createThenGetUser = async (
//     createUser: unknown,
//     getUser: unknown,
//   ): Promise<User> => {
//     const userId: string = await createUser();
  
//     const user = await getUser(userId);
  
//     return user;
//   };

// Solution 1
// const createThenGetUser = async (
//     createUser: () => Promise<string>,
//     getUser: (id: string) => Promise<User>,
// ): Promise<User> => {
//     const userId: string = await createUser();
      
//     const user = await getUser(userId);
      
//     return user;
// };

// Solution 2
type GetUser = (id: string) => Promise<User>;

const createThenGetUser = async (
    createUser: () => Promise<string>,
    getUser: GetUser,
): Promise<User> => {
    const userId: string = await createUser();
      
    const user = await getUser(userId);
      
    return user;
};