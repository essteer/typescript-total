// Set the "last" parameter to be optional:
// export const getName = (first: string, last: string) => {
//     if (last) {
//       return `${first} ${last}`;
//     }
//     return first;
//   };

//   Solution:
export const getName = (first: string, last?: string) => {
    if (last) {
      return `${first} ${last}`;
    }
    return first;
  };