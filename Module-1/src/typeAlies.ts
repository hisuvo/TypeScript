/**
    const user1: {
    name: string;
    age: number;
    country: string;
    } = {
    name: "suvo datta",
    age: 24,
    country: "Bangladesh",
    };

    const user2: {
    name: string;
    age: number;
    country: string;
    } = {
    name: "rajib datta",
    age: 18,
    country: "Bangladesh",
    };
 */

// above user1 and user2 inside same type agian and agian used
// so for reduce it we use type alies

// Object case type alies define
type User = {
  name: string;
  age: number;
  country: string;
};

const user1: User = {
  name: "suvo datta",
  age: 24,
  country: "Bangladesh",
};
const user2: User = {
  name: "rajib datta",
  age: 18,
  country: "Bangladesh",
};

// console.log(user1);
// console.log(user2);

// function case Type Alies define

type FuncType = (num1: number, num2: number) => number;

const add: FuncType = (num1, num2) => {
  return num1 + num2;
};

const result = add(23, 23);

// console.log(result);
