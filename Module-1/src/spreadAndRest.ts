// ------------------------- Spread Operator --------------------------------

// Array Spread Operator
let friends: string[] = ["Robi", "Tobi", "Kobi", "Nobi", "Zobi"];

let schoolFriends: string[] = ["Apu", "Sajib"];

let collegeFriends: string[] = ["Surove", "Anijit", "Aksh"];

friends.push(...schoolFriends, ...collegeFriends); // spread operator

// Object Spread Operator
const user = {
  name: "suvo",
  job: "Web developer",
};

const other = {
  hobby: "Outing",
  favouritColor: "Purple",
};

// console.log(user);
// console.log({ user, ...other });
// console.log({ ...user, ...other });

// --------------------- Rest Operator -------------------------

function invitation(firend1: string, firend2: string, firend3: string) {
  console.log("f1->", firend1);
  console.log("f2->", firend2);
  console.log("f3->", firend3);
}

// invitation("x", "y", "z");

// But I want to invite also five firends. How to do? Okey, this case use Rest Operator

// rest operator
function invitationRest(...members: string[]) {
  console.log(...members); // spreate operator
  console.log(members);
}

// invitationRest("x", "y", "z", "p");
