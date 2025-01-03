const marvelHeros = ["Thor","Ironman","Spiderman"]
const dcHeros = ["Superman","Flash","Batman"]

// Operations on 2 Arrays : [Shallow Copy] changes by reference

// 1) Push : it simply appends the complete array at the end of another array....it is treated as single element as NESTED ARRAY
marvelHeros.push(dcHeros)
console.log(marvelHeros)
console.log(marvelHeros[3][2])

// 2) Concat : It actually concats the array and returns the NEW modified array..thus we need to store it somewhere to see the reflected changes
let newArray = dcHeros.concat(marvelHeros)
console.log(newArray)

// 3) Spread Operator : It is more advanced than Concat as here we can pass more than 1 arguments 
let array1 = [1,2,3]
let array2 = [4,5,6]
let array3 = ["devansh","raghav"]
newArray = [...array1,...array2,...array3]
console.log(newArray)




// is,from & of
console.log(Array.isArray("Devansh"))
console.log(Array.isArray(array3))
console.log(Array.isArray(newArray))

console.log(Array.from("Devansh Chhabra"))  // from Strings
console.log(Array.from([1,2,3]))    // from Array
console.log(Array.from({name: "Devansh Chhabra",age: 20}))
newArray = Array.from("Raghav") 
console.log(newArray)

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))
newArray = Array.of(score1,score2,score3)
console.log(newArray)


// flat
newArray = [1,2,3,[4,5],[6,7,[8,9,10]]]
console.log(newArray.flat(Infinity))