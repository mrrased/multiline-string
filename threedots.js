// const age = [23, 78 , 12, 98, 32, 56];
// const age2 = [21, 65, 24, 21, 29, 70];
// const age3 = [36, 77, 99, 33, 22];
// const allAge =age.concat(age2).concat([5]).concat(age3);

// const allAge2 = [...age, ...age2,5, ...age3];
// console.log(allAge2);
// const allAmount =[430, 200, 720, 300, 400, 200];
// const toTallAmount =Math.max(...allAmount);
// console.log(toTallAmount);
function myFunc(a, b, ...args) {
    console.log(a); // 22
    console.log(b); // 98
    console.log(args); // [43, 3, 26]
   };
   myFunc(22, 98, 43, 3, 26);