type User = {
  name: string;
  age: number;
  job: string;
  address: {
    village: string;
    "honding/No": string;
    zila: string;
    country: string;
  };
  contact: {
    email: string;
    phone: string;
  };
};

const user: User = {
  name: "suvo datta",
  age: 24,
  job: "web Developer",
  address: {
    village: "Baulia",
    "honding/No": "D-24",
    zila: "Magura",
    country: "Bangladesh",
  },
  contact: {
    email: "suvo@gmail.com",
    phone: "+8801571463049",
  },
};

const {
  name,
  age,
  job,
  address: { village, zila, country },
  contact: { email, phone },
} = user;

console.log(phone);
