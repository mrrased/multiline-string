// function doubleIt(num){
//     return num * 2;
// }

const doubleIt = function myFun(num){
    return num * 3;
}

const multiple = num => num*2;
const singleParameter = () => 4;


const result = doubleIt(7);
const result2 = multiple(5);
const result3 = singleParameter();
console.log(result2);
console.log(result);
console.log(result3);