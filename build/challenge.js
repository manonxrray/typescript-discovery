"use strict";
const prettyPrintWilder = (users) => {
    console.log("########################");
    users.map((el) => {
        console.log(`${el.name} is ${el.age} years old`);
    });
    console.log("########################");
};
const wilders = [];
let user1 = { name: "Pierre", age: 25 };
let user2 = { name: "Paul", age: 42 };
let user3 = { name: "Jacques", age: 28 };
wilders.push(user1, user2, user3);
prettyPrintWilder(wilders);
// THE FUNCTION WILL RETURN void because it's only console.logs, there is no "return" statement
