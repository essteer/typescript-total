// Type "params" below as an object:

// export const addTwoNumbers = (params) => {
//     return params.first + params.second;
//   };

// Solution 1:
export const addTwoNumbers = (params: { first: number; second: number }) => {
    return params.first + params.second;
  };

// Solution 2:
type AddThreeNumbersArgs = {
    first: number;
    second: number;
    third: number;
};
  export const addThreeNumbers = (params: AddThreeNumbersArgs) => {
    return params.first + params.second + params.third;
  };

  // Solution 3:
  interface AddNumbersArgs {
    first: number;
    second: number;
  }
  export const addNumbers = (params: AddNumbersArgs) => {
    return params.first + params.second;
  };