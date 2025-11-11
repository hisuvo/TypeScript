/**
 *
 */

interface Developer<SM, B, C> {
  name: string;
  stack: string;
  jobTitle: string;
  salary: number;
  divice: {
    brand: string;
    model: string;
    processor: string;
  };
  smartWatch: SM;
  bike?: B;
  car?: C;
}

interface SmartWatch {
  brand: string;
  price: number;
  configer: string;
  capability: string[];
}

interface Car {
  brand: string;
  model: string;
  price: number;
}

const developer0: Developer<SmartWatch, null, Car> = {
  name: "suvo",
  stack: "MERN",
  jobTitle: "Back End Develper",
  salary: 345667,
  divice: {
    brand: "HP",
    model: "ElitBook G4",
    processor: "Intel",
  },
  smartWatch: {
    brand: "Apple",
    price: 45678,
    configer: "X-pro 45",
    capability: ["hartbite macherment", "blood macherment", "colling feture"],
  },
  car: {
    brand: "Mahend",
    model: "4-x",
    price: 1400000,
  },
};

interface Bike {
  brand: string;
  model: string;
  milence: number;
  price: number;
}

const developer1: Developer<SmartWatch, Bike, null> = {
  name: "suvo",
  stack: "Go Lang",
  jobTitle: "Back End Develper",
  salary: 505667,
  divice: {
    brand: "HP",
    model: "ElitBook G4",
    processor: "Intel",
  },
  smartWatch: {
    brand: "Apple",
    price: 45678,
    configer: "X-pro 45",
    capability: ["hartbite macherment", "blood macherment", "colling feture"],
  },
  bike: {
    brand: "Mahend",
    model: "4-x",
    milence: 45,
    price: 1400000,
  },
};

// console.log(developer1);
