/**
 *
 * ? What is TypeScript Type Assertion?
 * Todo: -> Type Assertion means telling TypeScript the exact type of value menually. when the developer know nore than TypeScript's type checker.
 *
 * ? Type Assertion defie by two way inside of parathesis
 *
 *  * i. (value as stirg)
 *  // * ii. (<string>value) not use in react project
 *
 */

let inputToOUtput = (input: string | number): string | number | undefined => {
  if (typeof input === "string") {
    let [value, currency] = input.split(" ");
    return `count the information is -> ${Number(value) * 200} ${currency}`;
  } else if (typeof input === "number") {
    return input * 1000;
  }
  return undefined;
};

const reslut1 = inputToOUtput(345) as number;
console.log(reslut1);

const reslut2 = inputToOUtput("345 dolor") as string;
console.log(reslut2);

// Second Example
const mySelf: any =
  "I am suvo data. I am a Web Application Developer.I Know some technologys that is demaded now in market.like Go, JavaScript, TypeScript, ProstgreSQL, GraphQL, MongoDB, and SQL";

let mySelfLength = (mySelf as string).length;
