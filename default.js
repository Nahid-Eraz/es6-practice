function add(num1,  num2 = 10){
    // num2 = num2 || 10;
    return num1 + num2;
}
const total = add(5, 20);
console.log(total);