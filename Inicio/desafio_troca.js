let a = 7;
let b = 94;

let c = b;
b = a;
a = c;

console.log('O valor de a = ' + a + ' e b = ' + b)

let c = 7;
let d = 94;

[c , d] = [d , c];

console.log('O valor de c = ' + c + ' e d = ' + d)