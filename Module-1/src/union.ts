// -------------------- Unions ----------------------
// unions define symbol is "|"

type UserRole = "admin" | "manager" | "rest";

const getDashbord = (role: UserRole) => {
  if (role === "admin") {
    console.log("admin deshbord");
  } else if (role === "manager") {
    console.log("manager deshbord");
  } else {
    console.log("gest deshbord");
  }
};

getDashbord("admin");
