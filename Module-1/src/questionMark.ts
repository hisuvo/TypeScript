// ? : tarniry operator => use for decision making
// ?? : nullish coalescing operator => work only if variable is null/undefined
// ? . optional chaining => very import for crose your project

// Tarniry Operator
function tarniryFunc(age: number): string {
  return age >= 21 ? "Eligible for married" : "Not Eligible for married";
}

// console.log(tarniryFunc(24));

// Nullish Coalescing Operator
function nullishCoalescingFunc(theme?: string): string {
  return theme ?? "Light Theme";
}

// console.log(nullishCoalescingFunc("Purple theme"));

// Optional chaining

const user = {
  name: "suvo",
  age: 24,
  address: {
    village: "Baulia",
    country: "Bangladesh",
    location: { x: 3434, y: 65456 },
  },
  contact: {
    phone: 93824945093,
    email: "suvo@gamail.com",
  },
};

console.log(user?.contact?.email);
