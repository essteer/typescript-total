// Don't use extends on this solution - replace only the "unknown" in export const
interface User {
    id: string;
    firstName: string;
    lastName: string;
  }
  
  interface Post {
    id: string;
    title: string;
    body: string;
  }
  
  /**
   * How do we type this return statement so it's both
   * User AND { posts: Post[] }
   */
//   export const getDefaultUserAndPosts = (): unknown => {
//     return {
//       id: "1",
//       firstName: "Matt",
//       lastName: "Pocock",
//       posts: [
//         {
//           id: "1",
//           title: "How I eat so much cheese",
//           body: "It's pretty edam difficult",
//         },
//       ],
//     };
//   };
  
//   const userAndPosts = getDefaultUserAndPosts();

// Solution - & is the intersection symbol:
export const getDefaultUserAndPosts = (): User & { posts: Post[] } => {
    return {
      id: "1",
      firstName: "Matt",
      lastName: "Pocock",
      posts: [
        {
          id: "1",
          title: "How I eat so much cheese",
          body: "It's pretty edam difficult",
        },
      ],
    };
  };

const userAndPosts = getDefaultUserAndPosts();

console.log(userAndPosts.posts[0]);

// Solution - variant extracting type:
// type DefaultUserAndPosts = User & { posts: Post[] } & { age: number }
// export const getDefaultUserAndPosts = (): DefaultUserAndPosts => {
//     return {
//       id: "1",
//       firstName: "Matt",
//       lastName: "Pocock",
//       age: 123
//       posts: [
//         {
//           id: "1",
//           title: "How I eat so much cheese",
//           body: "It's pretty edam difficult",
//         },
//       ],
//     };
//   };

// const userAndPosts = getDefaultUserAndPosts();

// console.log(userAndPosts.posts[0]);