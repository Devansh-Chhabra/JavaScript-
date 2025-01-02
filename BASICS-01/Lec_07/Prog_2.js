// Math Library comes by default in JavaScript
console.log(Math)   // Math is an Empty Object

console.log(Math.abs(-4))
console.log(Math.floor(4.9))
console.log(Math.ceil(4.1))
console.log(Math.max(32,564,56,453,789))
console.log(Math.min(54,76,54,897))

// It is important to note that Math.random() values lie between 0 & 1 only
console.log(Math.random())  
console.log(Math.floor(Math.random()))

// If we want the values between 10 and 20 or any other range then simply we have to use the formula/generic way 
let max = 6
let min = 1
// step 1) Math.random()
// step 2) max - min + 1
// step 3) Math.floor(step1 * step2)
// step 4) console.log(step 3 + min)
console.log(Math.floor( Math.random() * (max-min+1) ) + min)