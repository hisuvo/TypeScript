/**
 * ? What is Type Alias and Interface
 * Alias like creating a shortcut name for a type.
 * Interface focuses only on object types and method contracts.
 *
 */

type Person = {
  name: string;
  age: number;
  gender: string;
  job: string;
  hobby: string[];
};

const mywife: Person = {
  name: "X-En",
  age: 20,
  gender: "fmale",
  job: "Teacher",
  hobby: ["shoping", "cooking", "careing", "foodi"],
};

type Doctor = {
  specalist: string;
  charg: number;
  degree: string[];
};

type PersonWithDector = Person & Doctor;

const giconologist: PersonWithDector = {
  name: "X-En",
  age: 20,
  gender: "fmale",
  job: "Doctor",
  hobby: ["shoping", "cooking", "careing", "foodi"],
  specalist: "Giconologist",
  degree: ["MBBS", "Surgare", "MS"],
  charg: 500,
};

console.log(giconologist);

// --------------------- Interface -----------------------

// Object
interface IPerson {
  name: string;
  age: number;
  gender: string;
  job: string;
  hobby: string[];
}

const Iwife: IPerson = {
  name: "X-En",
  age: 20,
  gender: "fmale",
  job: "Teacher",
  hobby: ["shoping", "cooking", "careing", "foodi"],
};

interface IPersonGoal extends IPerson {
  goal: string;
}

const suvo: IPersonGoal = {
  name: "suvo",
  age: 24,
  gender: "male",
  job: "Web Application Developer",
  hobby: ["coding", "movie", "batmenthon"],
  goal: "IT Bussines Man",
};

console.log(suvo);

// Array (but not use interface for it)
interface IFruits {
  [index: number]: string;
}

const fruits: IFruits = ["Apple", "Oramge", "Mango"];

// Function (but not use interface for it)

// type Add = (num1: number, num2: number) => number;
interface Iadd {
  (num1: number, num2: number): number;
}

const add: Iadd = (num1, num2) => {
  return num1 + num2;
};

console.log(add(23, 7));
