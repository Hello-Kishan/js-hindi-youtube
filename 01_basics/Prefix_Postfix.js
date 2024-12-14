let x = 3;
const y = x++;

// console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

// console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


//postfix increment
let p = 3;
const q = p++;
// p is 4; q is 3
console.log(`p:${p}, q:${q}`);


let p2 = 3n;
const q2 = p2++;
// p2 is 4n; q2 is 3n
console.log(`p2:${p2}, q2:${q2}`);

