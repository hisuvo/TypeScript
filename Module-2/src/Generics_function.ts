// Generice Function

function arrayNumber(...value: number[]) {
  return value;
}

// console.log(arrayNumber(3, 4, 5, 6));

// const GenericArray = (value: number): number => value;
const GenericsArray = <T>(...value: T[]) => value;

// console.log(GenericsArray<string>("3", "4", "6", "7"));
// console.log(GenericsArray<number>(3, 5, 6, 7, 8));

// -------------------------------------------------------

const GenericesArrayOfObject = <T>(...value: T[]) => value;

interface Person {
  name: string;
  age: number;
  address: {
    village: string;
    zila: string;
    country: string;
  };
  contact: {
    phone: number;
    email: string;
  };
}

const suvo = {
  name: "suvo",
  age: 24,
  address: {
    village: "Baulia",
    zila: "Magura",
    country: "Bangladesh",
  },
  contact: {
    phone: 9843095894985,
    email: "suvo@gmail.com",
  },
};
const rajib = {
  name: "rajib",
  age: 18,
  address: {
    village: "Baulia",
    zila: "Magura",
    country: "Bangladesh",
  },
  contact: {
    phone: 9843095894985,
    email: "suvo@gmail.com",
  },
};
const sajib = {
  name: "sajib",
  age: 24,
  address: {
    village: "Baulia",
    zila: "Magura",
    country: "Bangladesh",
  },
  contact: {
    phone: 9843095894985,
    email: "suvo@gmail.com",
  },
};

// console.log(GenericesArrayOfObject<Person>(suvo, rajib, sajib));

// tuples
// * A tuple is a fixed-size array that can contain different types of values in a specific order.
// *Tuple (টিউপল) হচ্ছে একটি স্থির দৈর্ঘ্যের অ্যারে, যেখানে প্রতিটি উপাদানের টাইপ এবং অবস্থান নির্দিষ্ট থাকে।

// const createArrayWithTuples1 = (value1: number, value2: string) => [
//   value1,
//   value2,
// ];

// const createArrayWithTuples2 = (value1: { name: string }, value2: number) => [
//   value1,
//   value2,
// ];

const createTupleWithGenerics = <T, X>(value1: T, value2: X) => [
  value1,
  value2,
];

// [{},string]
const r1 = createTupleWithGenerics({ name: "suvo" }, "Love to Learn");
// console.log(r1);

// [string, number]
const r2 = createTupleWithGenerics(89099900, "Love to Learn");
// console.log(r2);

// [string, boolean]
const r3 = createTupleWithGenerics("web application developer", true);
console.log(r3);
