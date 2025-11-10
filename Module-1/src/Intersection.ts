type Employee = {
  name: string;
  phone: number;
  salary: number;
  email: string;
};

type Manager = {
  desigbation: string;
  menberSize: number;
};

type EmployeeManager = Employee & Manager;

const person: EmployeeManager = {
  name: "suvo",
  phone: 389473982,
  salary: 3455,
  email: "suvo@gmail.com",
  desigbation: "manage all employee",
  menberSize: 34,
};

// console.log(person);
