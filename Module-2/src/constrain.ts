//-------------------------- constraint --------------------------
// * A constraint in TypeScript means a restriction or rules that limits what types can be used in a ganarics type

// * You use the keyword extends to add a constraint — it tells TypeScript:

// ------------------------------------------------------

/**
 * TODO: create a student Generics function that inside keep id , name, dataOfBirth
 * TODO: but various student information different
 * TODO: so we use interface extends to {id, name, dateOfBirth}
 * TODO: If you don't keep {id, name, dateOfBirth} then show error
 * */

type StudentCommonInfo = { id: number; name: string; dataOfBirth: string };

const createStudentGenerics = <T extends StudentCommonInfo>(value: T) => [
  value,
];

const student1 = {
  id: 23,
  name: "suvo datta",
  dataOfBirth: "20-06-1999",
};

const student2 = {
  id: 34,
  name: "suvo datta",
  dataOfBirth: "20-04-79",
  hobby: "codding",
  fevouritColor: "Puple",
};

const r1 = createStudentGenerics(student1);
const r2 = createStudentGenerics(student2);

console.log(r2);
console.log(r1);
