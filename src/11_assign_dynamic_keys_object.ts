// Assign a type to the const cache = {} object:
// const createCache = () => {
//     const cache = {};
  
//     const add = (id: string, value: string) => {
//       cache[id] = value;
//     };
  
//     const remove = (id: string) => {
//       delete cache[id];
//     };
  
//     return {
//       cache,
//       add,
//       remove,
//     };
//   };

// https://stackoverflow.com/questions/12710905/how-do-i-dynamically-assign-properties-to-an-object-in-typescript

const createCache = () => {
    //   Solution 1: 
    const cache: Record<string, unknown> = {};
    //   Solution 2: 
    // const cache: Record<string, string> = {};
  
    const add = (id: string, value: string) => {
      cache[id] = value;
    };
  
    const remove = (id: string) => {
      delete cache[id];
    };
  
    return {
      cache,
      add,
      remove,
    };
  };

// Solution 3:
// interface Cache {
//     [index: number]: string;
// }

// const createCache2 = () => {
    
//     const cache: Cache = {};
  
//     const add = (id: string, value: string) => {
//       cache[id] = value;
//     };
  
//     const remove = (id: string) => {
//       delete cache[id];
//     };
  
//     return {
//       cache,
//       add,
//       remove,
//     };
//   };

// Solution 4:
const createCache3 = () => {
    
    const cache: {
        [index: number]: string;
    } = {};
  
    const add = (id: string, value: string) => {
      cache[id] = value;
    };
  
    const remove = (id: string) => {
      delete cache[id];
    };
  
    return {
      cache,
      add,
      remove,
    };
  };