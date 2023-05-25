// Type the onFocusChange function properly - replacing unknown
/**
 * How do we type onFocusChange?
 */
// const addListener = (onFocusChange: unknown) => {
//     window.addEventListener("focus", () => {
//       onFocusChange(true);
//     });
  
//     window.addEventListener("blur", () => {
//       onFocusChange(false);
//     });
//   };

// Solution 1
const addListener = (onFocusChange: (isFocused: boolean) => void) => {
    window.addEventListener("focus", () => {
      onFocusChange(true);
    });
  
    window.addEventListener("blur", () => {
      onFocusChange(false);
    });
  };

// Solution 2 - use void for typescript functions that return nothing
type FocusListener = (isFocused: boolean) => void;

const addListener2 = (onFocusChange: FocusListener) => {
    window.addEventListener("focus", () => {
      onFocusChange(true);
    });
  
    window.addEventListener("blur", () => {
      onFocusChange(false);
    });
  };