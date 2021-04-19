const prettyPrintWilder = (users: User[]) => {
  console.log("########################");
  users.map((el) => {
    console.log(`${el.name} is ${el.age} years old`);
  });
  console.log("########################");
};

interface User {
  name: string;
  age?: number;
}

const wilders: User[] = [];
let user1: User = { name: "Pierre", age: 25 };
let user2: User = { name: "Paul", age: 42 };
let user3: User =  { name: "Jacques", age: 28 };

wilders.push(user1, user2, user3);


prettyPrintWilder(wilders);
// THE FUNCTION WILL RETURN void because it's only console.logs, there is no "return" statement