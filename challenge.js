var prettyPrintWilder = function (users) {
    console.log("########################");
    users.map(function (el) {
        console.log(el.name + " is " + el.age + " years old");
    });
    console.log("########################");
};
var wilders = [];
var user1 = { name: "Pierre", age: 25 };
var user2 = { name: "Paul", age: 42 };
var user3 = { name: "Jacques", age: 28 };
wilders.push(user1, user2, user3);
prettyPrintWilder(wilders);
