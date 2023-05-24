// Type the API promise LukeSkyWalker
interface LukeSkywalker {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
  }
  
//   export const fetchLukeSkywalker = async (): LukeSkywalker => {
//     const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
//       return res.json();
//     });
  
//     return data;
//   };

// Solution 1:
// export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
//     const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
//       return res.json();
//     });
  
//     return data;
//   };

  // Solution 2:
// export const fetchLukeSkywalker = async () => {
//     const data: LukeSkywalker = await fetch("https://swapi.dev/api/people/1").then((res) => {
//       return res.json();
//     });
  
//     return data;
//   };

  // Solution 3:
export const fetchLukeSkywalker = async () => {
    const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
      return res.json();
    });
  
    return data as LukeSkywalker;
  };