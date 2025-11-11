/**
 * ? What is Generics in TypeScript?
 *
 * -> Generics in TypeScript are a tool for creating reusable, flexible, and type-safe components (functions, classes, interfaces, and types) that can work with a variety of data types, rather than a single fixed one.
 *
 *  -> জেনেরিক হলো টাইপের জন্য স্থানধারকের মতো। এগুলো আপনাকে ফাংশন, ক্লাস, অথবা ইন্টারফেস লিখতে সাহায্য করে যা টাইপের নিরাপত্তা না হারিয়ে একাধিক টাইপের সাথে কাজ করতে পারে। একটি নির্দিষ্ট টাইপ (যেমন নম্বর বা স্ট্রিং) নির্দিষ্ট করার পরিবর্তে, আপনি একটি জেনেরিক টাইপ (যেমন T) ​​ব্যবহার করেন যা কোড ব্যবহার করার সময় যেকোনো টাইপ দিয়ে প্রতিস্থাপন করা যেতে পারে।
 *
 *
 * ? Why Use Generics?
 * Code Reusability: Generics help you avoid repeating code for different data types, adhering to the "DRY" (Don't Repeat Yourself) principle.
 *
 * Type Safety: They provide strong type-checking at compile time, ensuring that the input and output types are consistent and eliminating the need for unsafe any types or explicit casting, which helps catch errors earlier in the development process.
 *
 * Flexibility: They allow you to build general-purpose algorithms and data structures (like an array or a queue) that can adapt to the specific data types required in different parts of your program
 *
 */

// ------------------------

/**
 * ? Where Generics are Used?
 * todo: Functions: To create functions that can handle various input and output types while maintaining type relationships.
 *
 * todo: interface
 *
 * todo: class
 *
 * todo: Type aliases
 */

type GenericArray<X, Y> = [X, Y];

const friends: GenericArray<string, string> = ["Apu Mondle", "Sourove sarker"];
const numbers: GenericArray<number, string> = [3, "4"];

// --------------------- Array ----------------------
type GenericToArray<A> = Array<A>;
type User = { name: string; age: number };

const userList: GenericToArray<User> = [
  {
    name: "suvo",
    age: 24,
  },
  {
    name: "anumop",
    age: 25,
  },
  {
    name: "anumop",
    age: 25,
  },
];

// console.log(userList);

function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}

// createPair<string, number>("hello", 42);
