// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function myFun(num){
//     return num * 2;
// }

const doubleIt = num => num *2;
const add = (x,y) => x+y;
const give5 = () => 5;
const doMath = (x,y) => {
    const add = x + y;
    const diff = x -y;
    const result = add * diff;
    return result;
}
// const result = doubleIt(20);
// const result = add(50, 70);
// const result = give5();
const result = doMath(20, 10);
console.log(result);