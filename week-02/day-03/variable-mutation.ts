let a: number = 3;
a = a + 10;
console.log(a);

//make it bigger by 10


let b: number = 100;
b = 100 - 7;
console.log(b);

//make it smaller by 7

let c: number = 44;
c *= 2;
console.log(c);

//double c's value

let d: number = 125;
d /= 5
console.log(d);

// divide d's value by 5

let e: number = 8;
e = e * e
console.log(e);

// what's the cube of e's value?


let f1: number = 123;
let f2: number = 345;
let bigger: boolean = true;
let smaller: boolean = false;

if (f1 > f2) {
    console.log(bigger);
}
else {
    console.log(smaller);
}

//tell if f1 is bigger than f2 (as a boolean)

let g1: number = 350;
let g2: number = 200;
g2 = g2 * 2;
let bigger: boolean = true;
let smaller: boolean = false;

if (g2 > g1) {
    console.log(bigger);
}
else {
    console.log(smaller);
}

//tell if the double of g2 is bigger than g1 (pras a boolean)

let h: number = 1357988018575474;
let n: number = 11;
let divisor: boolean = true;
let nDivisor: boolean = false;

if (h / n) {
    console.log(divisor);
}
else {
    console.log(nDivisor);
}


//tell if 11 is a divisor of h (as a boolean)

let i1: number = 10;
let i2: number = 3;
let higher: boolean = true;
let smaller: boolean = false;

if (i1 > i2 * i2 && i1 < i2 * i2 * i2) {
    console.log(higher);
}
else {
    console.log(smaller);
}


//tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)

let j: number = 1521;
let a: number = 3;
let b: number = 5;
let divisible: boolean = true;
let nDivisible: boolean = false;

if (j / a || j / b) {
    console.log(divisible);
}
else {
    console.log(nDivisible);
}

//tell if j is divisible by 3 or 5 (as a boolean)
