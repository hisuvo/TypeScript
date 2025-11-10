// --------------------- Destructuring ------------------------

// Object destructuring
const user = {
  id: 1,
  name: "Suvo Datta",
  email: "suvo@example.com",
  role: "Full Stack Developer",
  profile: {
    personal: {
      age: 22,
      gender: "Male",
      contact: {
        phone: "+880123456789",
        address: {
          street: "123 Main Street",
          city: "Dhaka",
          country: "Bangladesh",
          location: {
            lat: 23.8103,
            long: 90.4125,
          },
        },
      },
    },
    social: {
      github: "https://github.com/suvocoding",
      linkedin: "https://linkedin.com/in/suvocoding",
      portfolio: "https://suvocoding.dev",
    },
  },
  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    backend: {
      languages: ["Node.js", "Go"],
      frameworks: ["Express.js"],
      database: {
        primary: "MongoDB",
        secondary: ["MySQL", "PostgreSQL"],
      },
    },
  },
  projects: [
    {
      name: "FoodShare",
      description: "A MERN app for food donation and sharing.",
      technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
      team: {
        members: 4,
        roles: {
          leader: "Suvo Datta",
          backend: "Rafi",
          frontend: "Sadia",
          tester: "Tuhin",
        },
      },
    },
  ],
  status: {
    isActive: true,
    verified: true,
    lastLogin: "2025-11-09T12:30:00Z",
  },
};

// without destructuring
// console.log(user.profile.personal.contact.phone);
// console.log(user.profile.personal.contact.address);

// with destructuring
const {
  profile: {
    personal: {
      contact: {
        phone,
        address: { street, city, country, location },
      },
    },
  },
} = user;

// console.log(country);

// Array destructuring

const person: string[] = ["Anik", "Arnob", "Kaji", "Kamal"];

// without destructuring
// const bestStudent = person[1];

// with destructuring
const [A, bestStudent, , politician] = person;

// console.log(bestStudent);
