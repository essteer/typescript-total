// Type the (e) in the try catch, so that the message can be extracted:
// const tryCatchDemo = (state: "fail" | "succeed") => {
//     try {
//       if (state === "fail") {
//         throw new Error("Failure!");
//       }
//     } catch (e) {
//       return e.message;
//     }
//   };

// Solution 1:
const tryCatchDemo = (state: "fail" | "succeed") => {
    try {
      if (state === "fail") {
        throw new Error("Failure!");
      }
    } catch (e) {
        if (e instanceof Error) {
            return e.message;
        }
        // might need handling for this block
    }
  };

// Solution 2 (still not ideal):
// const tryCatchDemo = (state: "fail" | "succeed") => {
//     try {
//       if (state === "fail") {
//         throw new Error("Failure!");
//       }
//     } catch (e) {
//       return (e as Error).message;
//     }
//   };

// Solution 3 (not ideal because "any" suboptimal):
// const tryCatchDemo = (state: "fail" | "succeed") => {
//         try {
//           if (state === "fail") {
//             throw new Error("Failure!");
//           }
//         } catch (e: any) {
//           return e.message;
//         }
//       };

// Solution 4:
// const tryCatchDemo = (state: "fail" | "succeed") => {
//     try {
//       if (state === "fail") {
//         throw new Error("Failure!");
//       }
//     } catch (e: unknown) {
//       if (typeof e === "string") {
//         return e.toUpperCase()
//       }
//       else if (e instanceof Error) {
//         return e.message;
//       }
//     }
//   };
