// Set the "last" parameter to be optional:

// export const getName = (params: { first: string; last: string }) => {
//     if (params.last) {
//       return `${params.first} ${params.last}`;
//     }
//     return params.first;
//   };

// Solution:
// export const getName = (params: { first: string; last?: string }) => {
//     if (params.last) {
//       return `${params.first} ${params.last}`;
//     }
//     return params.first;
//   };

//   Extracting to type:
type Params = { first: string; last?: string };

export const getName = (params: Params) => {
    if (params.last) {
      return `${params.first} ${params.last}`;
    }
    return params.first;
  };