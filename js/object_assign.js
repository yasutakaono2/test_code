// object.assignのつかいかたについて
const target = { a: 1, b: 2 };
const source = { c: 1, d: 4 };

const returnedTarget = Object.assign(target, source);

console.log(target);
console.log(source);
console.log(returnedTarget);
