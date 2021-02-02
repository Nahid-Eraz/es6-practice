const person = { name: "jack sparro", age: 45, work: "film", friends: ["JB", "JK"] }


const { work, name, age, salary} = person;

const complexObject = {
    name: "abc",
    info: {
        address: "Dhaka",
        code: 1000
    }
}

const {code} = complexObject.info;
console.log(code);
// const work = person.work;
// const name = person.name;
// console.log(name, age, work, salary)
// console.log(name, age, work, salary)

const friends = ["modon", "bodon", "xoxo", "LOL"];
const [chotoFriend ,...restFriends] = friends;
// console.log(restFriends);