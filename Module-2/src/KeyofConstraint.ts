// Keyof Constraint

// key : value

// given rule info of keyof constraint

type Medicin = {
  name: string;
  groupname: string;
  brand: string;
  price: number;
  mfgdate: string;
  expairdate: string;
};

type MedicinKey =
  | "names"
  | "groupname"
  | "brand"
  | "price"
  | "mfgdate"
  | "expairdate";

type KeyOfMedicin = keyof Medicin;

// const medicinKey: MedicinKey = "names"; // check of medicin key
// const medicinKey1: KeyOfMedicin = "name"; // check of medicin key

const medicin1: Medicin = {
  name: "Napa",
  groupname: "paracitamol",
  brand: "Baxcimco phrama",
  price: 2,
  mfgdate: "20-06-25",
  expairdate: "01-09-26",
};

// const name = medicin.name;
// const name = medicin1["name"];
// const groupname = medicin1["groupname"];
// const price = medicin1["price"];
// const brand = medicin1["brand"];

// const getPropertyOfMedicin = (obj: Object, key: string) => {
//   return obj[key];
// };

const getPropertyOfMedicin = (obj: Medicin, key: keyof Medicin) => {
  return obj[key];
};

const r1 = getPropertyOfMedicin(medicin1, "expairdate");
// console.log(r1);

/**
 * But above function only work for Medicin object.
 * so we want to this function work on verios object like doctor,
 * teacher, person, studnet etc.
 *
 * So that case I need to use Generic tool.Okey given blow those
 *
 */

// const getPropertyOfMedicin = (obj: Medicin, key: keyof Medicin) => {
//   return obj[key];
// };

interface Doctor {
  name: string;
  specalist: string;
  charge: number;
  isMarried: boolean;
}

const genericGetPropertyOfObject = <T>(obj: T, key: keyof T) => obj[key];

// Now create a doctor object
const doctor: Doctor = {
  name: "Tapash Shikder",
  specalist: "Medicin",
  charge: 500,
  isMarried: false,
};

const rr1 = genericGetPropertyOfObject<Doctor>(doctor, "name");

// console.log(rr1);
