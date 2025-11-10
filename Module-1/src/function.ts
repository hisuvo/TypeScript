/**

Here’s a complete list of TypeScript function-related interview questions — from beginner to advanced — grouped by category for easy study 👇

🟢 Basic Level

What is a function in TypeScript?
How do you define a function in TypeScript?
What is the difference between function declaration and function expression?
What is the return type of a function? How do you define it in TypeScript?
What happens if you don’t specify a return type?
What are optional parameters in TypeScript?
What are default parameters?
Can you explain rest parameters in TypeScript?
How is type inference applied in function return types?
What does the void return type mean?

🟡 Intermediate Level

What is the difference between function type and function interface?
How do you define a function type in TypeScript?
What are arrow functions and how are they different from normal functions?
How does this behave differently in arrow functions vs. regular functions?
What is the purpose of never as a return type?
What is function overloading in TypeScript?
How do you implement function overloading? Give an example.
What is the difference between optional and rest parameters?
How can you create a function that accepts any number of arguments?
Can a function in TypeScript return another function?

🟠 Advanced Level

What are generic functions in TypeScript?
How do you define a generic function with constraints?
What’s the purpose of <T> in a function definition?
Explain how type inference works in generic functions.
How do you restrict generic types to a specific shape (like { id: number })?
What is the difference between T extends U and keyof T in function generics?
Can you create a higher-order function in TypeScript?
What are callback functions? How do you type them?
How do you type a function that returns a Promise?
How do you handle async/await in TypeScript with proper types?
What are function signatures in interfaces?
How can you use type aliases for function definitions?
What is the difference between using interface and type for a function type?
How do you type a function that takes another function as a parameter?
How to define a curried function type in TypeScript?

🔵 Real-World / Scenario-Based Questions

How do you ensure a function parameter must be an object with specific keys?
How would you type a function that takes both a string or a number?
How do you type a function that can return different types based on conditions?
How can you type a function that accepts both sync and async callbacks?
How can you ensure that a function only accepts a subset of an interface as parameter?
How do you type a function that modifies an array of generic type elements?
How can you use utility types (like Partial, Pick, Omit) inside function types?
What’s the difference between Function, () => void, and (arg: any) => any?
How do you type a function that throws an error?
How do you define a constructor function in TypeScript?

🧠 Tricky / Expert-Level Questions

What is type narrowing and how does it affect function logic?
How can you use discriminated unions in function parameters?
How do you type a recursive function?
What is declaration merging and how can it affect function types?
How do you type a function that returns a tuple?
How can you type a function overload that depends on generic type conditions?
What is ReturnType<>, and how can you use it for function types?
What is Parameters<>, and how can it help in reusing function types?
How do you extract argument types from an existing function type?
How do you define a call signature with optional generics?

🧩 Bonus Practical Examples

Write a function that swaps the values of two generic variables.
Write a function that merges two objects using generics.
Write a function that filters an array of any type using a callback.
Create a function that accepts another function and logs its execution time.
Write a function type that describes a CRUD handler interface.

 */

// anonymous function

function great(person: { name: string; age: number }) {
  return "Hello " + person.name;
}

let person = {
  name: "suvo",
  age: 34,
};
// console.log(great(person));

// -------------------------------------------

//  they can be name either interface
interface Student {
  name: string;
  id: number;
  class: string;
  course: string;
}

function student(person: Student) {
  return `${person.name} is a good studnet.Now he is studing in ${person.course}`;
}

// console.log(
//   student({
//     name: "Anik",
//     id: 4,
//     class: "xi",
//     course: "Electrical Engineering",
//   })
// );

// ----------------------------------------------

type Products = {
  id: string;
  title: string;
  price: number;
  quantity?: number; // optional type
  catagory?: string; // optional type
};

function getProduct(product: Products) {
  return product.id + "->" + product.title + "->" + product.price;
}

// console.log(getProduct({ id: "3df2", title: "Tea", price: 34 }));

type Negate = (value: number) => number;

const negateableFunction: Negate = (value) => {
  return value * 3;
};

// Rest parameters
function add(...rest: number[]): number {
  console.log(rest);
  let sum = rest.reduce((acc, current) => (acc += current), 0);

  return sum;
}

// console.log(add(3, 4, 5, 6, 7));
