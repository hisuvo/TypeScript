/**
 * ? What is enum.
 * * In TypeScript, an enum (short for enumeration) is a feature that allows you to define a set of named constants. This provides a way to create a collection of related values, making your code more readable, maintainable, and type-safe.
 *
 *
 * *enum (short for “enumeration”) is a special feature in TypeScript (and some other languages) used to define a set of named constant values.
 *
 *
 * *It’s useful when you have a collection of related values that don’t change — for example, user roles, directions, colors, or status codes.
 *
 * * enum মানে হলো একগুচ্ছ নাম দেওয়া ধ্রুব মান।
 *
 * * enum is constant set of fixed collection value
 *
 * ! enum don't run strip-on mode
 * ! then what is strip-on mode.
 * * -> TypeScript type doing those code run node.js this data call strip-on mode
 *
 * * -> TypeScript thaka type golo phala dia node run kora code ke strip-on mode bola but enum this mode kaj kira na.
 *
 * * so enum run korar some { --experimenral-transform-types } use kori
 *
 * ! node --experimental-transform-types src\enum.ts
 *
 */

type Role = "Admin" | "Manager" | "Editor" | "User" | "Viewer";

const canEdit = (role: Role) => {
  if (role === "Admin" || role === "Editor") {
    return true;
  } else {
    return false;
  }
};

// console.log(canEdit("Admin")); // ture
// console.log(canEdit("Editor")); // ture
// console.log(canEdit("User"));

// ----------------------- but we use enum ---------------------
// ! enum don't use my project inside me.

enum Roles {
  Admin = "Adim",
  Manager = "Manager",
  Editor = "Editor",
  User = "User",
  Viewer = "Viewer",
}

const powerOfUser = (role: Roles) => {
  if (role === Roles.Admin) {
    return "Have all access to your self";
  } else if (role === Roles.Editor) {
    return "You can edit and show";
  } else if (role === Roles.Manager) {
    return "You manage all thing";
  } else {
    return "You have only use this website";
  }
};

// console.log(powerOfUser("Admin"));
